let suma = 0;

console.time("bucle");
for (let i = 0; i < 100000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

console.time("bucle2");
for (let j = 0; j < 1200000000; j++) {
  suma += 1;
}

console.timeEnd("bucle2");

console.time("asinc");

let fun = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("proceso asincrono");
      resolve();
    });
  });
};

fun().then(() => {
  console.timeEnd("asinc");
});
