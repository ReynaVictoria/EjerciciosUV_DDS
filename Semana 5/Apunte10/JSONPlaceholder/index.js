/*pensamos como modularizar el codigo
El index usa un servicio que consume un acceso a datos
y dicho servcicio devuelve una lista de objetos al index
El index muestra esa lista de objetos

EL INDEX LE PIDE ALGO AL SERVICE
EL INDEX PIDE A OTRO SCRIPT DATA CON ACCESO A DATOS, ESE ACCESO VA A UNA FUENTE EXTERNA (JSON PLACEHOLDER)


LA JSON PLACEHOLDER DEVUELVE UN JSON CON DATOS A DATA
DATa DEVUELVE OBJETOS DE DOMINIO

LA IDEA ES SIMULAR UN BACKEND

*/

// import { getUsers } from "./data/dao.js"; NO NECESARIO PORQUE DEPENDE DE SERVICO
// 
import { obtenerUsuarios } from "./services/service.js";


async function main(){
    /*const users = await obtenerUsuarios();
    users.forEach(element => {
        console.log(element.mostrar());
        
    });
    */

    //HACER REQUERIMIENTOS DE TAREA: BUSCAR USER POR NOMRBE Y BUSCAR TODOS LOS POST DEL USER
}

main();