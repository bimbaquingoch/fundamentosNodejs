let hola = (nombre) => {
  // console.log(`hola soy una función asincrona`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
};

let adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`adios ${nombre}`);
      resolve();
    }, 1000);
  });
};

let hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ... .... ... `);
      // resolve();
      reject("Error HDSPTM!");
    }, 1000);
  });
};

// ejecucion

console.log(`Iniciando el proceso`);
hola("Bryan")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log(`terminado`);
  })
  .catch((error) => {
    console.error(error);
  });
