//test_xCreateCustomTest.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "tests/xCreateCustomTest_Simple_ReturnsSimplePassingTest"
], function(
  TestSuite,
  log,
  xCreateCustomTest_Simple_ReturnsSimplePassingTest
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xCreateCustomTest initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xCreateCustomTest" );

	xTestSuite.add ( xCreateCustomTest_Simple_ReturnsSimplePassingTest );      
	     
      xTestSuite.test();
    }
  });
});
