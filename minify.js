
var fs = require('fs');
var util = require('util');
var argv = process.argv.slice(2);

if(argv[0] === '--input' && argv[2] === '--output')

  var read = fs.createReadStream[1];
  var write = fs.createWriteStream[3];

console.log(read, write);

var data = require('app.css');
    Readable = require('stream').Readable;

var ReadStream = function() {
  Readable.call(this, {objectMode: true});
  this.data = data;
};
//able to take in data from any file type when inputed into the command line
//data is read and transformed using crypto function
//a new file is then written with the minified code
