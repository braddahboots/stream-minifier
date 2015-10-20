
var fs = require('fs');
var util = require('util').inherits;
var Transform = require('stream').Transform;

//pull data from the command line and cut off at index 2
var argv = process.argv.slice(2);

//if has input and output set variables
if(argv[0] === '--input' && argv[2] === '--output')

  var read = fs.createReadStream(argv[1]);
  var write = fs.createWriteStream(argv[3]);

//creating a minify class
function minify() {
  Transform.call(this);
}
util(minify, Transform);

//method on new instances of minify class
minify.prototype._transform = function(chunk, encoding, done) {
  chunk = chunk.replace('/[\n\r]+/g').toString('');
  console.log(chunk);
  // this.push(chunk);
  done();
};

read.pipe(new minify()).pipe(write);




// var data = require('app.css');
//     Readable = require('stream').Readable;

// var ReadStream = function() {
//   Readable.call(this, {objectMode: true});
//   this.data = data;
// };
//able to take in data from any file type when inputed into the command line
//data is read and transformed using crypto function
//a new file is then written with the minified code
