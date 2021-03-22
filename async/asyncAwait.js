let hola = async (nombre) => {
  // console.log(`hola soy una función asincrona`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
};

let adios = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`adios ${nombre}`);
      resolve();
    }, 1000);
  });
};

let hablar = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hola ... .... ... `);
      resolve();
      // reject("Error HDSPTM!");
    }, 1000);
  });
};
let main = async () => {
  let nombre = await hola("Bryan");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log(`Proceso terminado`);
};
console.log("Inicio del proceso");
main();
