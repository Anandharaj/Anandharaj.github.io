kot.controller('loginCtrl', ['$scope', 'kotAlertService', '$compile', function(scope, kotAlertService, compile) {
	// var template = compile('<div class="alert_overLayer">' +
	// 					'<div class="alert_box">' +
	// 						'<div class="alert_container">' +
	// 							'<div class="alert_mesg">' +
	// 								'<p>Alert Message</p>' +
	// 							'</div>' +
	// 							'<div class="alert_button">' +
	// 								'<button>OK</button>' +
	// 							'</div>' +
	// 						'</div>' +
	// 					'</div>' +
	// 				'</div>');
	scope.alert = function() {
		kotAlertService.alert('hiiii');
	};
}]);