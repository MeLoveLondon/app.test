#Instructions for Testing Emulator

The code works the same for ios and android but if you don't have a mac you can only emulate android. Instructions assume you have Windows with the **JDK installed.**



######*Configuring Android Emulator*

0. You need the Android SDK: 
	* 64 bit Windows: http://dl.google.com/android/adt/adt-bundle-windows-x86_64-20140702.zip
	* 32 bit Windows:http://dl.google.com/android/adt/adt-bundle-windows-x86-20140702.zip
	* General Site: http://developer.android.com/sdk/index.html
0. Unpack The SDK, 
	* go to <your-unpack-directory>/adt-bundle-windows-x8.../sdk/tools/
	* double click the android file (this should open the Android SDK Manager)
0. Go down to Android 4.4.2 (API 19)
	* Install the SDK Platform
 	* ARM EABI system image
 	* Intel x86 atom system image
 	* Google APIs (ARM system image)
 	* Google APIs (x86 system image)
 	* Click install
 	* Wait a while
0. In the SDK Manager window Go to Tools->Manage AVD's
	* click create
	* Fill in this way:
		- AVD Name: test
		- Device: 4" WVGA (Nexus S) (480 * 800)
		- Target: Android 4.4.2 - API Level 19
		- CPU/ABI: ARM
		- Skin: Skin with dynamic hardware controls
		- RAM 700 vm heap 32
		- Internal Storage 200
		- Leave SD card blank
		- ok
	* Click on test and click Start->Launch
	* Wait for it to boot and you should have a working android emulator. See that it works and proceed to the next section

######*Configuring Environmental Variables*
0. Install Apache Ant 
	* Go to ant.apache.org, click on binary Distributions, scroll to Current Releases of ant and download apache-ant-1.9.4.bin.zip, and unpack it
	* Go to the command line and type:
		 - set ANT_HOME= <the full path of the directory where you unpacked it (you can't delete it or move it after this)
		 - set JAVA_HOME=<path of you jdk installation tends to be C:\Program Files\Java\jdk1...etc
		 - set %PATH%;%ANT_HOME%\bin
		 - check out this post which explains it: http://madhukaudantha.blogspot.cz/2010/06/installing-ant-for-windows-7.html
		 - test that it's installed with running *ant -version*
0. Add location of sdk to your path
	* set ANDROID_HOME=C:\path\to\your\sdk
	* set ANDROID_TOOLS=%ANDROID_HOME%\tools
	* set ANDROID_PLATFORM_TOOLS=%ANDROID_HOME%\platform_tools
	* set PATH=%PATH%;%ANDROID_HOME%;%ANDROID_TOOLS%;%ANDROID_PLATFORM_TOOLS%
	* Without this you won't be able to add the android platform.


######*Running the App*

0. Get NodeJS: http://nodejs.org/download/ (In your case it should be a Windows msi installer)
0. Open a command line and cd to NodeJS install dir. most likely: *cd c:\Program Files\nodejs* 
0. Write: *npm install -g cordova*
0. Go to a folder where you want to make the project and write: *cordova create testing com.example.testing Testing* and
	* This will create a folder called testing with all the app builds
	* change dir to testing 
	* The source code is contained in the www folder 
	* Delete everything in the www folder
	* Download my repository from Github: https://github.com/MeLoveLondon/app.test/archive/master.zip (or click on the download ZIP button in the repo)
	* Copy the contents of my test-www folder into your www folder under testing
0. Go back to the testing folder in the command line *cd ..*
0. Write in the command line:
 	* cordova platforms add android
 	* cordova plugin add org.apache.cordova.device
 	* cordova plugin add org.apache.cordova.console
 	* cordova build android 
 	* cordova emulate android
0. This should launch the emulator with the demo running, if everything is correct you should see something like this(except it should say android instead of ios :D) This means you can now run cordova to create apps from the sources:

	![app screenshot](https://github.com/MeLoveLondon/app.test/blob/master/appscr.jpg)
	
It's better to get this out of the way now so you can run the actual app easily later. 

It's fine for the emulator to take a long time to boot, you might want to close everything else so it 
