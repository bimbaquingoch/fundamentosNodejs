let otrafuncion = () => {
  return rompe();
};
let rompe = () => {
  return 3 + z;
};

let serompre = (cb) => {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      /* handle error */
      console.error(`Error en la función asincrona: ${err.message}`);
      cb();
    }
  });
};

try {
  // rompe();
  // otrafuncion();
  serompre(() => {
    console.log("hay un error");
  });
} catch (err) {
  /* handle error */
  console.log("se ha roto algo en tu código");
  console.log(err.message);
}
