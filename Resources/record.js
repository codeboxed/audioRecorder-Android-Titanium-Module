var win = Ti.UI.createWindow({
  title: 'Sound Recorder Test',
  exitOnClose: true,
  fullscreen: false,
  backgroundColor: 'black'
});


var audioRecorder = require('com.codeboxed.audiorecorder');

var fileRecorded = "";
var path  = "";

var recordBtn = Titanium.UI.createButton({
	width:100,
	height:50,
	top:20,
	left:5,
	title: "Record"
});

//All the methods below are optional, if they are not used the module will use default values for everything
	
audioRecorder.setAudioFormat("DEFAULT");	// set the audio format
audioRecorder.setAudioEncoder("DEFAULT");	// set the encoder used to compress the audio
audioRecorder.setMaxDuration(40000);		// set a maximum duration for when recording an audio file
audioRecorder.setMaxFileSize(1000000);		// set a maximum file zise in bytes
	
audioRecorder.setFileName("myfile","3gp");	// set a certain file name of the recorded audio
audioRecorder.setRandomFileName(12,"3gp");  // overwrites the filename given by you above.
											// if you dont use any of the two methods to set the file name, 
											// a default one will be set by the module: "AudioTest.3gp"

// VERY IMPORTANT: All files are saved in the root of the SDCARD, 
// so for example if you use: audioRecorder.setFileName("myfile","3gp");
// the file "myfile.3gp" will be saved on the sdcard (/mnt/sdcard), so if you mount your SDCARD
// and browse it, you will find the file in the root.
// If you use audioRecorder.setFileName("myFolder/myfile","3gp");
// the file "myfile.3gp" will be saved on the SDCARD in the folder "myFolder". You get the idea :)

recordBtn.addEventListener('click', function(e) {
	
	audioRecorder.start();	// the recording begins
	
});


var stopRecordBtn = Titanium.UI.createButton({
	width:100,
	height:50,
	top:80,
	left:5,
	title: "STOP"
});

stopRecordBtn.addEventListener('click', function(e) {
	
	fileRecorded = audioRecorder.stop();	// The stop() method will return the file that was generated after the recording stopped.

});


var playBtn = Titanium.UI.createButton({
	width:100,
	height:50,
	top:140,
	left:5,
	title: "PLAY"
});

playBtn.addEventListener('click', function(e) {

	audioRecorder.playAudio(fileRecorded); // playing the file recorded with the name taken from the stop() method, or you can specify your own name

});


win.add(recordBtn);
win.add(stopRecordBtn);
win.add(playBtn);

win.open();