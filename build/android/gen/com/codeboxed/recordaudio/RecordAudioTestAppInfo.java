package com.codeboxed.recordaudio;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class RecordAudioTestAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public RecordAudioTestAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
					
					properties.setString("ti.deploytype", "test");
	}
	
	public String getId() {
		return "com.codeboxed.recordaudio";
	}
	
	public String getName() {
		return "Record Audio Test";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "alex";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2011 by alex";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "3a537940-97d3-4830-8fad-7c7dc301254f";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
