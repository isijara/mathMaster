
$.mathMasterWin.open();

var fb = require('facebook');
fb.appid = 654538291277702;
//fb.permissions = [FACEBOOK_APP_PERMISSIONS];
fb.authorize();

function jugar() {
	Alloy.createController("jugar");
}

