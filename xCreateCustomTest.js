//xCreateCustomTest.js: Functional Logic.

define([
	"validate",
	"etc/Data"
], function(
	validate,
	Data
) {
  return function( Input ) {
	validate(Data( Input ));
	
	//Return custom test.	
	return function() {
		return Input.ComparisonFunction(
			Input.Function( Input.Input ),
			Input.ExpectedOutput
		);
	}
  };
});
