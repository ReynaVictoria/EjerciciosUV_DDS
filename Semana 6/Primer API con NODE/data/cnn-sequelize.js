import { Sequelize} from "sequelize";
//cnn_db es conexion a la BD


// new Sequelize(nombre de la base, usuario, contraseña, {objeto donde paso ciertas acciones})


//SIEMPRE COMO MINIMO VOY A NECESITAR 1 OBJETO CONNECTION!!!!
export const cnn_db = new Sequelize('productos',"","", {
    dialect: 'sqlite', //a que me conecto
    storage: './products.sqlite' //donde esta la bd
    //CONSULTAR POR QUE CAMBIA LA RUTA Y BORRA EL ARCHIVO -> BASE DE DATOS POR FUERA, YO NO DIJE A LA SYNC QUE SI NO EXISTE CREE LA.....

});