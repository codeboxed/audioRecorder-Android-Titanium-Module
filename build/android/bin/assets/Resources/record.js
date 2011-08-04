var win = Ti.UI.createWindow({
  title: 'Sound Recorder Test',
  exitOnClose: true,
  fullscreen: false,
  backgroundColor: 'black'
});


var audiorecorder = require('com.codeboxed.audiorecorder');
Ti.API.info("module is => " + audiorecorder);

var fileRecorded = "";
var path  = "";

var recordBtn = Titanium.UI.createButton({
	width:100,
	height:50,
	top:20,
	left:5,
	title: "Record"
});


recordBtn.addEventListener('click', function(e) {
	
	audiorecorder.setAudioFormat("MPEG_4");
	audiorecorder.setAudioEncoder("DEFAULT");
	audiorecorder.setMaxDuration(40000);
	audiorecorder.setMaxFileSize(1000000);
	audiorecorder.setFileName("myfile","3gp");
	audiorecorder.setRandomFileName(12,"3gp");
	audiorecorder.start();
	
	var recStatus = audiorecorder.getStatus();
	var recFileName = audiorecorder.getFileName();
	var recMaxDuration = audiorecorder.getMaxDuration();
	var recMaxFileSize = audiorecorder.getMaxFileSize();
	
	Ti.API.info(recStatus);
	Ti.API.info(recFileName);
	Ti.API.info(recMaxDuration);
	Ti.API.info(recMaxFileSize);
	
});


var stopRecordBtn = Titanium.UI.createButton({
	width:100,
	height:50,
	top:80,
	left:5,
	title: "Stop"
});

stopRecordBtn.addEventListener('click', function(e) {
	fileRecorded = audiorecorder.stop();
});



var playBtn = Titanium.UI.createButton({
	width:100,
	height:50,
	top:140,
	left:5,
	title: "PLAY"
});

playBtn.addEventListener('click', function(e) {

	//Ti.API.info("YOUR PATH: "+path);

	audiorecorder.playAudio(fileRecorded);

});



win.add(stopRecordBtn);
win.add(recordBtn);

win.add(playBtn);

win.open();