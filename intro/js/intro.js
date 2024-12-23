function sum(a, b) {
  return a + b;
}

// * Funcion de primer orden

const resp = sum;
console.log(resp(5, 5));

// * Funcion de orden superior

function operation(fn, a, b) {
  console.log("Hace algo");
  console.log(fn(a, b));
}

operation(sum, 7, 7);

// * arrow function
operation(
  (a, b) => {
    return a * b;
  },
  5,
  5
);

// * foreach
const names = ["Hector", "Juan", "Pablo", "Ana"];
names.forEach((name) => console.log(name)); // inmutable // arrow function dentro del foreach
names.forEach((name) => console.log(name.toUpperCase())); // inmutable
names.sort(); // mutable

// * map
// Recorrer un array generando uno nuevo sin mofdificar los elementos originales
const namesUpper = names.map((name) => name.toUpperCase());

// * reduce
// Recorrer un array y acumular un valor, donde el primer valor del arror function
// es el acumulador y el segundo es el valor actual
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((ac, number) => {
  return ac + number;
}, 0);
console.log("reduce",total);
