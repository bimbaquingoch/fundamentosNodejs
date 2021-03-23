// const process = require("process");
// proces viene dentro de los modulos globales
process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

// si se ejecuta el exit ya te desconectaste del event loop
process.on("exit", () => {
  console.log("El proceso ha terminado");
  setTimeout(() => {
    console.log("esto no se va a ver nunca");
  }, 0);
});

process.on("uncaughtException", (err, origen) => {
  console.error("te olvidaste de capturar el error");
  console.error(err.message);
  setTimeout(() => {
    console.log("ESto viene de las excepciones");
  });
});
// process.on("uncaughtRejection");

hola();

console.log("si el error no se recoge, no sale");
