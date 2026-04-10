function esPrimo(numero) {
    if (numero <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si el número es divisible por algún número entre 2 y su raíz cuadrada, no es primo
        }
    }
    return true; // Si no se encontró ningún divisor, el número es primo

}

//console.log(esPrimo(7));
//console.log(esPrimo(4));

// generar array con numeros primos que vayan entre el 2 hasta el parametro hasta
function generarPrimos(hasta) {
    const primos = [];
    for (let i = 2; i <= hasta; i++) {
        if (esPrimo(i)) {
            primos.push(i); // Si el número es primo, se agrega al array
        }
    }
    return primos;
}

function trabajarConPrimos(nPrimeros) {
    const primos = [];
    const primosCuadrados = [];
    let sumaPrimos = 0;
    let booleanMayoresQuue5 = false;

    let numero = 2; // El primer número primo
    while (primos.length < nPrimeros) {
        if (esPrimo(numero)) {
            primos.push(numero); // Si el número es primo, se agrega al array
        }
        numero++; // Se incrementa el número para verificar el siguiente
    }

    for (let i = 0; i < primos.length; i++) {
        const cuadrado = primos[i] ** 2;
        primosCuadrados.push(cuadrado);
        sumaPrimos += primos[i];
        booleanMayoresQuue5 = primos.every(primo => primo > 5);

        
    }
    return { primos, primosCuadrados, sumaPrimos, booleanMayoresQuue5 };
}

console.log(trabajarConPrimos(10));
