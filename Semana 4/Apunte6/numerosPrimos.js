const x = 1
const y = 2
const z = 7
const g = 8

/* if (condicion) {secuencia a ejecutar}
    else {} 

switch (expresion) {
    case <caso1>:
        secuencia a ejecutar
        break
    case <caso2>:
        secuencia a ejecutar
        break
        .
        .
        .
    default:
        secuencia a ejecutar sin importar el valor de la expresion

}

operador ternario :
condicion ? expresion1 : expresion2

for (inicializacion; condicion; incremento) 
    {instrucciones a ejecutar}

while (condicion) 
    {instrucciones a ejecutar}

do {instrucciones} while (condicion)



*/
function esPrimo(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(esPrimo(z))