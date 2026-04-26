import {cnn_db} from "../data/cnn-sequelize.js"
import { DataTypes } from "sequelize"


//(nombre del modelo, {atributos como objeto}, {colummna de auditoria - timstamp})
export const Product = cnn_db.define('Product', {
    "id":{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    "name":{
        type: DataTypes.STRING,
        allowNull: false
    },
    "precio":{
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    "stock":{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0

    }       
},
{
    timestamps: false, //cuando sincronice el modelo con las tablas del otro lado, crea o no 2 columnas de fecha y hora de creacion y actualizacion
    cnn_db

}




)