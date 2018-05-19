//xCreateCustomTestValidation.js: Functional Logic.

define([
	"log",
	"underscore"
], function(
	log,
	_
) {
  return [
	function( Input ) {
		if ( _.isFunction( Input.ComparisonFunction ) === false ) {
		//if Input's member ComparisonFunction is not a Function then...
			throw { "message": "Error: Input type was not function!" };
		} else {
			return true;
		}
	}
  ];
});
