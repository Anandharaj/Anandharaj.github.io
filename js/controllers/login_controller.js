kot.controller('loginCtrl', ['$scope', 'kotAlertService', 'kotValidateService', '$compile', function(scope, kotAlertService, kotValidateService, compile) {
	scope.login = {userName: '', password: ''};
	scope.loginValidation = function(loginValues) {
		// kotAlertService.alert('Hai this anand im working with KOT project');
		var errorList = kotValidateService.fieldValidate(loginValues) || '';
		if (errorList !== '') {
			kotAlertService.alert(errorList);
			return;
		}
		errorList = kotValidateService.loginValidate(loginValues) || '';
		if (errorList !== '') {
			kotAlertService.alert(errorList);
			return;
		}
		kotAlertService.alert('Welcome ' + loginValues.userName);
	};
}]);