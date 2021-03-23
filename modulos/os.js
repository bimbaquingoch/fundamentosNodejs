const os = require("os");

console.log(os);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`Plataforma: ${os.platform()}`);
console.log(`CPU'S: ${os.cpus()}`);
console.log(`CPU'S: ${os.cpus().length}`);
// console.log(`Constantes(señales del sistema): ${os.constants}`);
// Memoria
console.log(`Memoria: ${os.freemem()}`);

const SIZE = 1024;
let kb = (bytes) => {
  return bytes / SIZE;
};
let mb = (bytes) => {
  return kb(bytes) / SIZE;
};

let gb = (bytes) => {
  return mb(bytes) / SIZE;
};

console.log(`Memoria kb: ${kb(os.freemem())}`);
console.log(`Memoria mb: ${mb(os.freemem())}`);
console.log(`Memoria gb: ${gb(os.freemem())}`);

console.log(`Memoria: ${gb(os.totalmem())}`);

console.log(`Directorio raiz: ${os.homedir()}`);
console.log(`Directorio temporal: ${os.tmpdir()}`);
console.log(`Nombre del host de la maquina: ${os.hostname()}`);
console.log(`Interfaz de red: ${os.networkInterfaces()}`);
<<<<<<< HEAD
// user info
console.log(`User info: ${os.userInfo()}`);
console.log(`User info: ${os.userInfo().shell}`);
console.log(`User info: ${os.userInfo().gid}`);
console.log(`User info: ${os.userInfo().uid}`);
console.log(`Uptime: ${os.release()}`);
=======
>>>>>>> e089429c6ba5dc16de32edbf61473fb38f1a70ab
