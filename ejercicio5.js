// 5.-  Escribir un programa que le pida al usuario que ingrese su nombre, 
//      y luego imprima "Hola [nombre]" si el nombre ingresado es "Juan", 
//     'María" 0 "Pedro", 0 'Hola desconocido" 
//      si el nombre ingresado no es uno de esos tres.

let nombre = prompt("Ingrese su nombre");

if (nombre === "maria" || nombre === "pedro") {
  alert("Hola " + nombre);
}else{
  alert("Hola Desconocido");
}







