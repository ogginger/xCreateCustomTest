//xCreateCustomTest_ComparisonFunctionNotFunction_ThrowsErrorNotFunction.js: Testing logic.

define([
	"xCreateCustomTest"
], function(
	xCreateCustomTest
) {
	return {
		"Name":"xCreateCustomTest_ComparisonFunctionNotFunction_ThrowsErrorNotFunction",
		"Input": "",
		"Function": function( Input ) {
			var xResult = { "message": "No Error." };
			try {
				xCreateCustomTest( Input );
			} catch( Error ) {
				xResult = Error;	
			} finally {
				return xResult;
			}
		},
		"ExpectedOutput": { "message": "Error: Input type was not function!" },
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
