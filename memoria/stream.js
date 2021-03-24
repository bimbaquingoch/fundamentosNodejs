const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

// con esto la información es visible sin necesidad de usar el .toString()
readableStream.setEncoding("UTF8");

// readableStream.on("data", (chunk) => {
//   // console.log(chunk);
//   data += chunk;
//   // conforme esto vaya creciendo
// });

// readableStream.on("end", () => {
//   console.log(data);
// });

// ya es un buffer de escritura.
// process.stdout.write("hola");
// process.stdout.write("Que");
// process.stdout.write("tal");

// un stream de transformacion

const Transform = stream.Transform;

const mayus = () => {
  Transform.call(this);
};

util.inherits(mayus, Transform);

mayus.prototype._transform = (chunk, cod, cb) => {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let Mayus = new mayus();

readableStream.pipe(Mayus).pipe(process.stdout);
