//able to take in data from any file type when inputed into the command line
//data is read and transformed using crypto function
//a new file is then written with the minified code

var fs = require('fs');

var data = require('app.css');
    Readable = require('stream').Readable;
    util = require('util');

var ReadStream = function() {
  Readable.call(this, {objectMode: true});
  this.data = data;
};


