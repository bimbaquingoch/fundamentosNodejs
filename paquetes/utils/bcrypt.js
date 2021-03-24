const bcrypt = require("bcrypt");

const password = "12345Segura&";

// recibe 3 parametros
// 1: password
// 2: el numero de rondas para crear el hash
// 3: una funcion
bcrypt.hash(password, 5, (err, hash) => {
  //
  // el hash es el codigo que se haya creado
  console.log(hash);

  // esta funcion compare compara si la password
  // generada despues del hash, sea la misma
  bcrypt.compare(password, hash, (err, resultado) => {
    console.log(resultado);
  });
});
