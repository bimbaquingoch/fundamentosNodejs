console.log("Algo");
console.error("Algo");
console.warn("algo");
var tabla = [
  {
    a: 1,
    b: "z",
  },
  {
    a: 3,
    b: "f",
  },
];
console.table(tabla);

console.group("Grupo1");
console.log("Conversación");
console.log("blablabal");
console.log("blablabal");
console.log("blablabal");
console.groupEnd("Grupo1");

let fun1 = () => {
  console.group("f1");
  console.log("esto pertenece a la funcion 1");
  console.log("la funcion 1");
  fun2();
  console.log("regreso a la funcion1");
  console.groupEnd("f1");
};
let fun2 = () => {
  console.group("f2");
  console.log("esta es la funcion 2");
  console.groupEnd("f2");
};

console.log("Empezamos");

fun1();

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
