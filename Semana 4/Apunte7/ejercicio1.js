// ejercicio 1

// crea un array con precipitaciones de un mes con valores random entre 15 y 35


function promedio(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}   

//determina el promedio anual de precipitaciones, ten en cuenta que la funcion promedioMes es para un solo mes al mismo tiempo, no los 12

const arrayPromediosMensualesPrecipitaciones = [];

for (let i = 0; i < 12; i++) 
    //el ciclo de los 12 meses
    {
   let precipitacionesMes = [];
   //crea un array que completare con las precipitaciones de cada mes
    for (let j = 0; j < 30; j++) {
        precipitacionesMes.push(Math.floor(Math.random() * (35 - 15 + 1)) + 15);
    //agrego al array las precipitaciones de cada dia del mes
    }
    arrayPromediosMensualesPrecipitaciones.push(promedio(precipitacionesMes));
    //al array de promedio anual le agrego el promedio del mes que se calculo con la funcion promedio


}   

const promedioAnualPrecipitaciones = promedio(arrayPromediosMensualesPrecipitaciones);

const arrayPromediosMensualesSegundoSemestre = arrayPromediosMensualesPrecipitaciones.slice(6, 12);
const promedioSegundoSemestrePrecipitaciones = promedio(arrayPromediosMensualesSegundoSemestre);

const mesMasSeco = arrayPromediosMensualesPrecipitaciones.indexOf(Math.min(...arrayPromediosMensualesPrecipitaciones));


console.log("El promedio anual de precipitaciones es: " + promedioAnualPrecipitaciones);
console.log("El promedio del segundo semestre de precipitaciones es: " + promedioSegundoSemestrePrecipitaciones);
console.log("El mes más seco es el mes " + (mesMasSeco + 1) + " con un promedio de " + arrayPromediosMensualesPrecipitaciones[mesMasSeco]);

