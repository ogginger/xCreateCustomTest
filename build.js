//build.js: Configuration file for optimizing xCreateCustomTest.js. 
/*
*/ 
({
    paths: {
	"log": "lib/log.min",
	"jquery": "empty:",
	"underscore": "lib/underscore.min"
    },
    exclude: [ "jquery", "underscore", "log" ],
    name: "xCreateCustomTest",
    out: "xCreateCustomTest.min.js"
})
