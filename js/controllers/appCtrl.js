kot.controller('appCtrl', ['$scope', '$rootScope', function(scope, rootScope) {
	rootScope.alertClose = function() {
		angular.element(document.querySelector('.alert_box')).removeClass('slideInDown');
		angular.element(document.querySelector('.alert_box')).addClass('slideOutUp');
		setTimeout(function() {
			angular.element(document.querySelector('.alert_overLayer')).removeClass('fadeIn');
			angular.element(document.querySelector('.alert_overLayer')).addClass('fadeOut');	
		}, 1000);
		setTimeout(function() {
			angular.element(document.querySelector('.alert_overLayer')).remove();
		}, 1500);
	};
}]);