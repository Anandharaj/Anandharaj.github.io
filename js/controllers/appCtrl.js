kot.controller('appCtrl', ['$scope', '$rootScope', function(scope, rootScope) {
	rootScope.alertClose = function() {
		angular.element(document.querySelector('.alert_overLayer')).remove();
	};
}]);