define(function(require, exports, module){
	return function(config) {
		function alert(msg) {
			alert(msg);
		};

		return {
			alertmsg: alert
		};
	}
});