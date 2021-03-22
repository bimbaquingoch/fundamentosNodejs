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
  }, 1000);
};

let hablar = (callbackHablar) => {
  setTimeout(() => {
    console.log(`hola ... .... ... `);
    callbackHablar();
  }, 1000);
};
