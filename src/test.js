define(function(require, exports, module){
	MainObj = {};

	if(typeof MainObj.util == 'undefined') {
		var utilsObject = require('util.js');
		MainObj.util = new utilsObject({});
	}

	function init() {
		alert("main init");
	}

	requirejs.config({
		waitSeconds: 200
	});

	init();
});