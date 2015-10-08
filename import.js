'use strict';

var fs =  require('fs'),
	lazy = require("lazy");
var file = 'file.txt';
fs.exists(file, function(exists) {
	if (!exists) {
		fs.writeFile(file, '', function(err, fd) {
			if (err) throw 'error writing file ' + err;
			console.error('logging file not exist, but was created');
		});
	}else{
		console.log('exist, good !');
		// https://github.com/pkrumins/node-lazy
		new lazy(fs.createReadStream('file.txt'))
		     .lines
		     .forEach(function(line){
		         console.log(line.toString());
		     }
		);
	}
});
