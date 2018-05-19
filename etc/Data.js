//Data.js: Functional Logic.

define([
	"xCreateCustomTestValidation"
], function(
	xCreateCustomTestValidation
) {
  return function( Input ) {
		return {
			"Data": Input,
			"Validation": xCreateCustomTestValidation 
		};
  };
});
