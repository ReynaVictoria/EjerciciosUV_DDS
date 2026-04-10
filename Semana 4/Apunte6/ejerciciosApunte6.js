/*funcion esBisiesto condicional: Divisible por 4.
No divisible por 100.
Divisible por 400. (2000 y 2400 son bisiestos pues aún siendo divisibles por 100 lo son también por 400.
Pero los años 1900, 2100, 2200 y 2300 no lo son porque solo son divisibles por 100). */

function esBisiesto(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " es un año bisiesto";
    } else {
        return year + " no es un año bisiesto";
    }
}

console.log(esBisiesto(2400));

/*

*/

function recuadro(texto) {return "*".repeat(texto.length + 4) + "\n" + "* " + texto + " *\n" + "*".repeat(texto.length + 4);}   
console.log(recuadro("Hola Mundo"));

