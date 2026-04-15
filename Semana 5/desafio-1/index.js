import seedrandom from "seedrandom";

//establecer semilla
const random = seedrandom(1763519);

//generar 1000 nros aleatorios ENTEROS POSITIVOS Y NEGATIVOS en un array usando dseedrandom
const numerosAleatorios = [];
for (let i = 0; i < 1000; i++) {
    numerosAleatorios.push(random.int32());
}

//demostracion de forEach para iterar sobre los elementos del array
console.log("Demostracion de join: {" + numerosAleatorios.join(",") + "}");

//demostracion de filter para buscar numeros positivos
console.log("Cantidad de numeros positivos: ", numerosAleatorios.filter(n => n > 0).length);
