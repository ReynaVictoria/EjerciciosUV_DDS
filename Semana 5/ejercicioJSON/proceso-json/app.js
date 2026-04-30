import { readFile } from "fs/promises";

// Función para leer el archivo JSON y devolverlo como array de objetos
function readJSON(file) {
  return readFile(file, "utf8").then((data) => JSON.parse(data));
}

function recuadro(texto) {return "*".repeat(texto.length + 4) + "\n" + "* " + texto + " *\n" + "*".repeat(texto.length + 4);}


(async function main() {
  try {
    const data = await readJSON("./data/tbbt.json");

    // 1. Construir un mapa de mapas: Map<temporada, Map<nro_episodio, episodio>>
    const mapTbbt = new Map(); //objeto con pares clave valor
    data.forEach((element) => { //element es un episodio
      mapTbbt.has(element.season) //ya existe esta temporada en el map???
        ? mapTbbt.get(element.season).set(element.episode_num, element) // operador ternario ?, si ya existe te da el mapaa interno de esa temporada
        : mapTbbt.set( //si no existe crea un nuevo map para la temporada
            element.season,
            new Map([[element.episode_num, element]])
          );
    });

    // A partir del mapa construido, resolver los siguientes puntos:

    // 1. Listar los títulos de todos los episodios de la temporada 1
    console.log(recuadro("USANDO .GET"));
    console.log(mapTbbt.get("1"));
    const temporada1 = mapTbbt.get("1");

    console.log(recuadro("USANDO .FOREACH"));
    temporada1.forEach((episodio, numero) => { //numero es la clave del map
        console.log(numero, episodio.title);
    })


    // 2. Mostrar el título del episodio 22 de la temporada 3
    console.log(recuadro("EPISODIO 22 DE LA TEMPORADA 3"));
    console.log(mapTbbt.get("3").get("22").title);


    // 3. Calcular y mostrar el promedio de rating de la temporada 3
    console.log(recuadro("PROMEDIO DE LA TEMPORADA 3"));
    const temporada3 = mapTbbt.get("3");
    let acumulador = 0;
    temporada3.forEach((episodio) => {
        acumulador += parseFloat(episodio.imdb_rating);
    })
    
    console.log(acumulador / temporada3.size);
    console.log(recuadro("USANDO .FOREACH")); 


    console.log(typeof(mapTbbt.get("1").get("1")).season);

  } catch (error) {
    console.error("Error al consumir el archivo JSON:", error);
  }
})();