//xCreateCustomTest_simple_ReturnsSimplePassingTest.js: Testing logic.

define([
	"xCreateCustomTest"
], function(
	xCreateCustomTest
) {
	return {
		"Name":"xCreateCustomTest_simple_ReturnsSimplePassingTest",
		"Input": {
			"Input": undefined,
			"Function": function( Input ) {
				return true;
			},
			"ExpectedOutput": true,	
			"ComparisonFunction": function( Result, Expected ) {
				return Result === Expected;
			}
		},
		"Function": function( Input ) {
			var bResult = false;
			var xTest = xCreateCustomTest( Input );
			if ( typeof xTest === "function" ) {
				bResult = true;
			}
			return bResult;
			
		},
		"ExpectedOutput": true
	};
});
