// 6.-  Escribir un programa que le pida al usuario que ingrese un número entero positivo, 
//      y luego imprima "El número es primo" si el número es primo, 
//      0 "El número no es primo' si el número no es primo.
//      un número primo solo es divisible por sí mismo y por 1

let num = parseInt(prompt("Ingrese un numero entero positivo"));
let divisor = 1;
let contador = 0;
while (divisor <= num) {
  if (num % divisor == 0) {
    contador ++;
  }
  divisor ++;
}
contador == 2 ? alert("El numero Es primo") : alert("El numero No es primo")







