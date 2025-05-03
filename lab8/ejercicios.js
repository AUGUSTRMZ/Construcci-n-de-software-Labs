//ejericio 1 Funcion que reciba un arreglo de numeros y devuelva un promedio
function promedio(array) {
  let suma = 0;
  for (let i = 0; i < array.lenght; i++){
    suma += arreglo[i];
  }
  const promedio = suma / array.length;
  return promedio;
}
const arreglo = [10, 8, 9, 7];
console.log("Promedio:", promedio(arreglo));

//ejercicio 2 funcion que recibe string y lo escribe en un archivo
const fs = require('fs');
function saveText(texto) {
  fs.writeFileSync('salida.txt', texto);
  console.log("Texto guardado en salida.txt"); 
}
saveText("Laboratorio 8 completado beibi XD");