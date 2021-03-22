const fs = require("fs");

let leer = (ruta, callbackLeer) => {
  fs.readFile(ruta, (error, data) => {
    // leyendo
    callbackLeer(data.toString());
  });
};

// leer(__dirname + "/archivo1.txt", console.log);

let escribir = (ruta, contenido, callbalEscribir) => {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      console.error("no se pudo escribir el archivo");
    } else {
      console.log("escrito correctamente");
    }
  });
};

// escribir(
//   __dirname + `/archivo1.txt`,
//   " soy el nuevo archivo creado con FS",
//   console.log
// );

let borrar = (ruta, callbackBorrar) => {
  fs.unlink(ruta, callbackBorrar);
};

borrar(__dirname + "/archivo1.txt", console.log);
