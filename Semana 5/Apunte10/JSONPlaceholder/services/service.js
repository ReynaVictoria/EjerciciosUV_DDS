import { getUsers, getPosts } from "../data/dao.js";
import Usuario from "../domain/Usuario.js";

export async function obtenerUsuarios() {
    const users = await getUsers();
    return users.map(u => new Usuario(u));
}

export async function buscarUsuarioPorNombre(nombre) {
    const usuarios = []
    const users = await obtenerUsuarios();

    /* OPCION A
    users.forEach(user => {
        if (user.nombre.toLowerCase().includes(nombre.toLowerCase())) {
            const usuario = new Usuario(user);
            usuarios.push(usuario);
        }
    });
    */

    /*  OPCION B 
    */
    // SIN EN ARROW FUNCTION NO PONGO UN RETURN VIENE UN RETURN POR DEFAULT!!!  
    // user => user.name.toLowerCase().includes(nombre.toLowerCase()) TIENE QUE DEVOLVER ALGO ESTA IMPLICITO!!
    const buscado = users.find(user => user.name.toLowerCase().includes(nombre.toLowerCase())); //DEVUELVE EL PRIMERO. FILTER BUSCA TODOS LOS QUE CUMPLAN!!!!
    return buscado ? new Usuario(buscado) : null;

}


