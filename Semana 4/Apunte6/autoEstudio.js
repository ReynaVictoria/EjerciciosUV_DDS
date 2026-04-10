//Funciones

//declarar funciones
/*function holaMundo() {console.log("Hola Mundo");}

holaMundo();

function saludar(nombre) {console.log("Hola " + nombre)}
saludar("Juan");

function sumar(a,b){return a + b}
console.log(sumar(5,3));
*/

//expresion de funcion

/* 
const holaMundo= function(){console.log("Hola Mundo")};
holaMundo();

let saludo = function(nombre){console.log("Hola " + nombre)};
saludo("Juan");

let sumar = function(a,b) {return a + b};
console.log(sumar(5,3));
*/

// expresion de una funcion invocada inmediatamente (IIFE)

(function (){var number = Math.random() * 10; console.log(number >= 5);})();

