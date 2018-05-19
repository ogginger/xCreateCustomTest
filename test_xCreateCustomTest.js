//test_xCreateCustomTest.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "tests/xCreateCustomTest_Simple_ReturnsSimplePassingTest",
  "tests/xCreateCustomTest_ComparisonFunctionNotFunction_ThrowsErrorNotFunction"
], function(
  TestSuite,
  log,
  xCreateCustomTest_Simple_ReturnsSimplePassingTest,
  xCreateCustomTest_ComparisonFunctionNotFunction_ThrowsErrorNotFunction
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xCreateCustomTest initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xCreateCustomTest" );

	xTestSuite.add( xCreateCustomTest_Simple_ReturnsSimplePassingTest );      
	xTestSuite.add( xCreateCustomTest_ComparisonFunctionNotFunction_ThrowsErrorNotFunction );

   
      xTestSuite.test();
    }
  });
});
