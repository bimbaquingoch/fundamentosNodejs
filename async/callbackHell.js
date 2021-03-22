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

let conversacion = (nombre, veces, uncallback) => {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, uncallback);
    });
  } else {
    adios(nombre, uncallback);
  }
};

console.log("Inicio del proceso...");

hola("Bryan", (nombre) => {
  conversacion(nombre, 3, () => {
    console.log("Proceso terminado");
  });
});

// hola("Bryan", (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         hablar(() => {
//           adios(nombre, () => {
//             console.log("Fin del proceso...");
//           });
//         });
//       });
//     });
//   });
// });
