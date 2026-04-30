// necesita como minimo el modelo
import { User } from "../models/users.js"
import { Op } from "sequelize"


//QUE PASA SI MANDAN UN USER NULL: EXPLOTA TODO PORQUE NULL.CORREO MUERE!!!
/*function login (user) {
    return User.findOne({
        where: {
            correo: user.correo, //compara usa AND
            password: user.password //compara usa AND
        }
    })}
*/
// metodos de sequielize 
// findAll 
// findOne : recibe un objeto con una propiedad WHERE{} de tipo objeto


//buscar el primero -> de que manera consturir un where para usar OR y combinar criterios??
// apunte 11 combinar criterios


//Usando programacion definitiva !user es que no viene user
// TODOS TODOS LOS METODOS DE SEQUIELIZE SON ASINCRONOS !!! AWAIT
export async function login(user) {
    if (!user) return null;

    return await User.findOne({
        where: {
            correo: user.correo,
            password: user.password
        }
    });
}