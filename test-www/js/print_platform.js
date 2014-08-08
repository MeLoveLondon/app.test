document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
	p = document.getElementById('demo');
	p.innerHTML += ('Cordova Version: ' + device.cordova + '<br/>' + 
				   'Model: ' + device.model + '<br/>' + 
				   'OS: ' + device.platform + '<br/>' + 
				   'Version ' + device.version + '<br/>' +
				   'UUID: ' + device.uuid + '<br/>');
}