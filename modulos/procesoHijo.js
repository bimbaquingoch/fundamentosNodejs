// red sintaxis de node modules
// import {exec} from "child_process";

// sintaxis antigua
// const exec = require('child_process').exec

// sintaxis de ES6
const { exec, spawn } = require("child_process");

// exec("ls -al", (err, stdout, sterr) => {
// exec("neofetch", (err, stdout, sterr) => {
// exec("node modulos/consola.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);
//
console.log(proceso);
// process id
console.log(proceso.pid);
// esta conectado?
console.log(proceso.connected);

// orientacion a eventos
proceso.stdout.on("data", (dato) => {
  console.log("esta muerto?");
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", () => {
  console.log("el proceso terminó");
  console.log("esta muerto?");
  console.log(proceso.killed);
});
