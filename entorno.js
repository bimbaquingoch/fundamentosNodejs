// por defecto si no hay nombre dice "sin nombre"
let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "No hay web";

console.log(`hola ${nombre}`);
console.log(`La web es ${web}`);
