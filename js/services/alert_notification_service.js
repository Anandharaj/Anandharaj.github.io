/*******************************KOT ALERT NOTIFICATION*****************************************/ 

kot.service('kotAlertService', ['$rootScope', '$compile', function(rootScope, compile) {
	var instance = this;
	instance.alert = function(message) {
		var template = compile('<div class="alert_overLayer">' +
						'<div class="alert_box">' +
							'<div class="alert_container">' +
								'<div class="alert_mesg">' +
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