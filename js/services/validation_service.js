kot.service('kotValidateService', [function() {
	var instance = this;
	instance.fieldValidate = function(loginValues) {
		var errorList = ''
		if (!loginValues.userName) {
			errorList += 'UserName is Empty' + '\n';
		}
		if (!loginValues.password) {
			errorList += 'Password is Empty';
		}
		return errorList;
	}
	instance.loginValidate = function(loginValues) {
		var errorList = ''
		if (loginValues.userName !== USERNAME) {
			errorList += 'UserName is not Found' + '\n';
		}
		if (loginValues.password !== PASSWORD) {
			errorList += 'Password is invalid';	
		}
		return errorList;
	}

}])