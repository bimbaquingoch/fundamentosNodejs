let hola = (nombre, elcallback) => {
  // console.log(`hola soy una función asincrona`);
  setTimeout(() => {
    console.log(`hola ${nombre}`);
    elcallback(nombre);
  }, 1000);
};

let adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`adios ${nombre}`);
    otroCallback();
  }, 3000);
};

console.log("Inicio del proceso...");
hola("Bryan", (nombre) => {
  adios(nombre, () => {
    console.log("Fin del proceso...");
  });
});
