//xCreateCustomTest.js: Functional Logic.

define([], function() {
  return function( Input ) {
	//Validate Input
	
	//Return custom test.	
	return function() {
		return Input.ComparisonFunction(
			Input.Function( Input.Input ),
			Input.ExpectedOutput
		);
	}
  };
});
