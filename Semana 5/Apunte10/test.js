//practica de callback

function imprimir1(callback) {
    callback()
}

imprimir1(function () {
    console.log("Texto impreso");
});



//practica de callback

function imprimir2(callback) {
    callback()
}

const imprimirNombre2 = () => {
    console.log("hola soy el callback")
}

imprimir2(imprimirNombre2)


// setTimeout(funcionCallback, tiempoMS)
setTimeout(function () {
    console.log("Probando setTimeOut");
}, 2000)

/* Promesas
es un objeto que representa la respuesta de una tarEA asincrona, 
es decir una tarea que no se sabe cuando termina ni su resultado

Estados de las promesas
Pendientes
Cumplida
rechazada
arreglada: rechazada o cumplida
*/

let x = 10
const p = new Promise((resolve, reject) => {
    if (x == 10) {
        resolve("cumplida")
    } else {
        reject("rechazada")
    }
})

let mensaje = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Probando setTimeOut")
    }, 2000)
});

console.log(mensaje)

// then catch

let y = 141
const prom = new Promise((resolve, reject) => {
    if (y == 10) {
        resolve("cumplida")
    } else {
        reject("rechazada")
    }
})

prom.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

/* creacion de Map
Son estructuras de datos que almacenan una coleccion de pares clave valor
implementan una estructura de datos "tabla de dispersion o de hash"
*/

//map vacio
const miMapa = new Map();

//agregar meses del año 
miMapa.set("enero", 1);
miMapa.set("febrero", 2);
miMapa.set("marzo", 3);
miMapa.set("abril", 4);
miMapa.set("mayo", 5);
miMapa.set("junio", 6);
miMapa.set("julio", 7);
miMapa.set("agosto", 8);
miMapa.set("septiembre", 9);
miMapa.set("octubre", 10);
miMapa.set("noviembre", 11);
miMapa.set("diciembre", 12);

//generar el mapa a partir de un array de arrays

const arrayMeses = [
[1, "enero"],
[2, "febrero"],
[3, "marzo"],
[4, "abril"],
[5, "mayo"],
[6, "junio"],
[7, "julio"],
[8, "agosto"],
[9, "septiembre"],
[10, "octubre"],
[11, "noviembre"],
[12, "diciembre"]
]

const meses = new Map(arrayMeses);

//Map a partir de un array de objetos pares ordenados clave valor

const arrayObjetosMeses = [
    {clave: 1, valor: "enero"},
    {clave: 2, valor: "febrero"},
    {clave: 3, valor: "marzo"},
    {clave: 4, valor: "abril"},
    {clave: 5, valor: "mayo"},
    {clave: 6, valor: "junio"},
    {clave: 7, valor: "julio"},
    {clave: 8, valor: "agosto"},
    {clave: 9, valor: "septiembre"},
    {clave: 10, valor: "octubre"},
    {clave: 11, valor: "noviembre"},
    {clave: 12, valor: "diciembre"}
    ]
    
    const mapaMeses = new Map(arrayObjetosMeses);

/*NO ENTIENDO ESTO:

const mapTbbt = new Map( element => [season: element.season + element.episode_num,
element]);

Recordar el uso del operador ternario como condición
const mapTbbt = new Map()
data.forEach(element => {
 mapTbbt.has(element.season) ?
 mapTbbt.get(element.season).set(element.episode_num, element)
 : mapTbbt.set(element.season, new Map([[element.episode_num, element]]));
});

El bloque anterior también se podría escribir así
const mapTbbt = new Map()
data.forEach(element => {
 if (mapTbbt.has(element.season))
 mapTbbt.get(element.season).set(element.episode_num, element);
 else
 mapTbbt.set(element.season, new Map([[element.episode_num, element]]));
});
*/


//mostrar el mapa
console.log(miMapa)
console.log(meses)
console.log(meses)