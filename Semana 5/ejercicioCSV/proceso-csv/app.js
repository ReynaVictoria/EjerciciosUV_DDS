import { createReadStream } from "fs";
import csv from "csv-parser";

// Función para leer archivo CSV y devolver una promesa con el resultado
function readCSV(file) {
    return new Promise((resolve, reject) => { //promesa: te voy a devolver datos cuando termine de leer
        const results = []; //aca guardo los datos
        try { //manejo de errores
            createReadStream(file) //empiezo a leer el archivo
                .on("error", (error) => reject(error))
                .pipe(csv()) //lo que leo lo mando al parser CSV, convierto el TEXTO en OBJETOS
                .on("data", (data) => results.push(data)) //CADA FILA ES UN OBJETO QUE SE GUARDA EN RESULTS
                .on("end", () => resolve(results)); //Cuando termine de leer, resuelvo la promesa
        } catch (error) {
            reject(error);
        }
    });
}

function recuadro(texto) {return "*".repeat(texto.length + 4) + "\n" + "* " + texto + " *\n" + "*".repeat(texto.length + 4);}

// Función principal autoinvocada
(async function main() {
    try {
        const data = await readCSV("./data/tbbt.csv"); //espera a que termine de leer el archivo y guarda los datos en data

        //console.log(data);
        // 📋 A partir del array 'data', resolver:

        // 1. Listar los títulos de todos los episodios de la temporada 1
        const temporada1 = data.filter((episodio) => episodio.season === "1");
        console.log(recuadro("LISTADO DE EPISODIOS DE LA TEMPORADA 1"));
        console.log(temporada1.map((episodio) => episodio.title));
        // 2. Mostrar el título del episodio 22 de la temporada 3
        const ep22temp3 = data.find((episode) => episode.season === "3" && episode.episode_num === "22")
        console.log(recuadro("EPISODIO 22 DE LA TEMPORADA 3"));
        console.log(ep22temp3.title);
        // 3. Calcular y mostrar el promedio de rating de la temporada 3
        const promedioTemp3 = data.filter((episodio) => episodio.season === "3") .reduce((acumulador, episodio) => acumulador + episodio.rating, 0) / data.filter((episodio) => episodio.season === "3").length;
    
        //desafio 1
        console.log(recuadro("DESAFIO 1: Titulos y Raiting de la temporada 1"));
        temporada1.forEach(episodio => {console.log(episodio.title + " - " + episodio.rating);
            
        });
    
    } catch (error) {
        console.error("Error al leer archivo CSV:", error);
    }

    

    

})();