# audioRecorder Module version 1.0.0

## Description

The AudioRecorder Titanium Module offers you the possibility to record audio using your Android device, save the recording and playback the recording, whitout the need to use Intents or anything that can't be customized on your own liking.
Please read this file before use, especially the comments in the example

## Accessing the audioRecorder Module

To access this module from JavaScript, you would do the following:

	var audioRecorder = require("com.codeboxed.audiorecorder");

The audioRecorder variable is a reference to the Module object.	

## Reference

### audioRecorder.setAudioFormat

	/**
	 * @method setAudioFormat
	 * @param String Represents the audio formats accepted by Android ("DEFAULT", "MPEG_4", "RAW_AMR", "THREE_GPP"). Default value: "DEFAULT"
	 */
	audioRecorder.setAudioFormat("DEFAULT");


### audioRecorder.setAudioEncoder

	/**
	 * @method setAudioEncoder
	 * @param String Represents the audio encoder used to compress the recorded file ("DEFAULT","AMR_NB"). Default value: "DEFAULT"
	 */
	audioRecorder.setAudioEncoder("DEFAULT");

### audioRecorder.setMaxDuration

	/**
	 * @method setMaxDuration
	 * @param int Represents the maximum duration in miliseconds of the recorded audio. When the recording reaches this limit, it will automatically stop. Default value: 30 Minutes
	 */
	audioRecorder.setMaxDuration(40000);

### audioRecorder.setMaxFileSize

	/**
	 * @method setMaxFileSize
	 * @param int Represents the maximum file size in BYTES of the recorded audio. When the recording reaches the maximum size, it will automatically stop. Default value 999999999 Bytes
	 */
	audioRecorder.setMaxFileSize(40000000);

### audioRecorder.setFileName

	/**
	 * @method setFileName
	 * @param String The name you chosen for your audio file without the extension 
	 * @param String The extension of the audio file. Please take into account the AudioFormat and the AudioEncoder you set up, to pick the extension accordingly. It can contain the "." or not.
	 */
	audioRecorder.setFileName("testFile","3gp");
	- or -
	audioRecorder.setFileName("testFile",".3gp");

### audioRecorder.setRandomFileName

	/**
	 * @method setRandomFileName
	 * @param int The number of characters that will be generated for file name
	 * @param String The extension of the audio file.
	 */
	audioRecorder.setRandomFileName(12,"3gp"); (example of return: A4EH73F99BSD.3gp)

### audioRecorder.getStatus

	/**
	 * @method getStatus
	 * @return Boolean Returns "true" if a recording is taking place or "false" if not.
	 */
	audioRecorder.getStatus();

### audioRecorder.getFileName

	/**
	 * @method getFileName
	 * @return String Returns the file name generated or chosen for the recorded audio. 
	 */
	audioRecorder.getFileName();

### audioRecorder.getMaxDuration

	/**
	 * @method getMaxDuration
	 * @return int The maximum duration of the recording that was set by you or the default one
	 */
	audioRecorder.getMaxDuration();

### audioRecorder.getMaxFileSize

	/**
	 * @method getMaxFileSize
	 * @return int The maximum file size of the recording that was set by you or the default one 
	 */
	audioRecorder.getMaxFileSize();

### audioRecorder.start

	/**
	 * @method start
	 * @return Boolean Returns "true" if the recording has started with success, or "false" if it failed or did not start. 
	 */
	audioRecorder.start();

### audioRecorder.stop

	/**
	 * @method stop
	 * @return String The filename generated for the recorded audio.
	 */
	audioRecorder.stop();
	
### audioRecorder.playAudio

	/**
	 * @method stop
	 * @param String The path of the recorded audio file
	 */
	audioRecorder.playAudio("/mnt/sdcard/"+fileName);
	
### audioRecorder.stopAudio

	/**
	 * @method stop
	 */
	audioRecorder.stopAudio();

## Usage

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
		
		fileRecorded = audiorecorder.stop();	// The stop() method will return the file that was generated after the recording stopped.

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
	

## Author

Codeboxed, 
team@codeboxed.com, 
http://www.codeboxed.com

## License

Copyright (c) 2011 Codeboxed

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.