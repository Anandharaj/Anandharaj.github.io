/*******************************KOT ALERT NOTIFICATION*****************************************/ 

kot.service('kotAlertService', ['$rootScope', '$compile', function(rootScope, compile) {
	var instance = this;
	instance.alert = function(message) {
		var template = compile('<div class="alert_overLayer fadeIn animated">' +
						'<div class="alert_box slideInDown animated">' +
							'<div class="alert_container">' +
								'<div class="alert_mesg">' +
									'<h4>KOT ALERT</h4>' +
									'<p>' + message + '</p>' +
								'</div>' +
								'<div class="alert_button">' +
									'<button ng-click="alertClose()">OK</button>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>');
		angular.element(document.querySelector('body')).append(template(rootScope));
	}

}]);