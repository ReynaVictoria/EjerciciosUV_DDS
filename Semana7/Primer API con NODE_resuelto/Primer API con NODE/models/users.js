// Creacion de modelos en apunte 11

import {cnn_db} from "../data/cnn-sequelize.js" //importamos la conexion
import { DataTypes } from "sequelize" //importamos los datatypes

// ¿es correcto importar sin las llaves? NO PORQUE NO ES UN DEFAULT!!!

export const User = cnn_db.define("Users",{ //EL MODELO Y LAS TABLAS SE TIENEN QUE LLAMAR IGUAL, SI NO SE LLAMAN IGUAL CREA OTRA TABLA PORQUE NO LAS PUEDE SINCRONIZAR
    "id": {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },

    "nombre": {
        type: DataTypes.STRING,
        allowNull: false
    },

    "apellido": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "correo": {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    "password": {
        type: DataTypes.STRING,
        allowNull: false
    },
    
},
    {
        timestamps: false,
        cnn_db //NUNCA OLVIDAR ESTO!!!
    }
)