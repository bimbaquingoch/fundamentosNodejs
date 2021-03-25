let asincrona = (callback) => {
  setTimeout(() => {
    try {
      let a = 3 + x;
      callback(null, a);
    } catch (e) {
      /* handle error */
      callback(e, null);
    }
  }, 1000);
};

asincrona((err, dato) => {
  if (err) {
    // console.error(`Hay un error ${err.message}`);
    throw err;
    // return false;
  }
  console.log("funciona bien");
});
