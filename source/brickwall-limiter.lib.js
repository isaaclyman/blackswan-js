var sampleRate = 44100; // Hz
var preGain = 0; //db
var postGain = 0; //db
var attackTime = 0; //s
var releaseTime = 0.5; //s
var threshold = -2; //dB
var lookAheadTime = 0.005; //s  5ms hard-coded
var delayBuffer = new DelayBuffer(lookAheadTime * sampleRate);

function DelayBuffer(n) {
	n = Math.floor(n);
    this._array = new Float32Array(2 * n);
    this.length = this._array.length;  // can be optimized!
    this.readPointer = 0;
    this.writePointer = n - 1;
	for (var i=0; i<this.length; i++){
		this._array[i] = 0;
	}
}
DelayBuffer.prototype.read = function() {
    var value = this._array[this.readPointer % this.length];
    this.readPointer++;
    return value;
};
DelayBuffer.prototype.push = function(v) {
    this._array[this.writePointer % this.length] = v;
    this.writePointer++;
};

var envelopeSample = 0;
var getEnvelope = function(data, attackTime, releaseTime, sampleRate){

	//attack and release in milliseconds
	var attackGain = Math.exp(-1/(sampleRate*attackTime));
	var releaseGain = Math.exp(-1/(sampleRate*releaseTime));

	var envelope = new Float32Array(data.length);

	for (var i=0; i < data.length; i++){

		var envIn = Math.abs(data[i]);

		if (envelopeSample < envIn){

			envelopeSample = envIn + attackGain * (envelopeSample - envIn);

		}

		else {

			envelopeSample = envIn + releaseGain * (envelopeSample - envIn);

		}

		envelope[i] = envelopeSample;

	}

	return envelope;

}


var ampToDB = function(value){

	return 20 * Math.log10(value);

}


var dBToAmp = function(db){

	return Math.pow(10, db/20);

}


var limit = function(audioProcessingEvent){

	var inp = audioProcessingEvent.inputBuffer.getChannelData(0);
	var out = audioProcessingEvent.outputBuffer.getChannelData(0);

	//transform db to amplitude value
	var postGainAmp = dBToAmp(postGain);

	//apply pre gain to signal
	var preGainAmp = dBToAmp(preGain);
	for (var k=0; k < inp.length; ++k){

		out[k] = preGainAmp * inp[k];

	}

	var envelopeData = getEnvelope(out, attackTime, releaseTime, sampleRate);

	if (lookAheadTime > 0){

		//write signal into buffer and read delayed signal
		for (var i = 0; i < out.length; i++){

			delayBuffer.push(out[i]);
			out[i] = delayBuffer.read();

		}
	}

	//limiter mode: slope is 1
	var slope = 1;

	for (var i=0; i<inp.length; i++){

		var gainDB = slope * (threshold - ampToDB(envelopeData[i]));
		//is gain below zero?
		gainDB = Math.min(0, gainDB);
		var gain = dBToAmp(gainDB);
		out[i] *= (gain * postGainAmp);

	}

}

export default limit;
