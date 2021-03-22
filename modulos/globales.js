// console.log(global);
// console.log(setInterval);
// let i = 0;
// let intervalo = setInterval(() => {
//   console.log(`terminado`);
//   if (i === 3) {
//     clearInterval(intervalo);
//   }
//   i++;
// }, 1000);

setImmediate(() => {
  console.log(`terminado inmediate`);
});

// con esto accedemos a los modulos
// require();

console.log(process);
console.log(__dirname);
console.log(__filename);

// Crear una variable global para NODE
global.mivariable = "El valor";

console.log(mivariable);
