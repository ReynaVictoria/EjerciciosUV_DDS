import express from "express";
import { getAllProducts, addProduct } from "./services/products-service.js";    
// import db from "./data/db-init.js"; NO HACE FALTA PORQUE YA ESTA CREADA
import {cnn_db} from "./data/cnn-sequelize.js"
//TODOS LOS METODOS DE SEQUELIZE SON ASINCRONOS!!! PORQUE DEBE ESPERAR A LA DB

const app = express(); //server
app.use(express.json()); //PARA QUE EN EL POSTMAN EL BODY NO SEA NULL SINO UN JSON Y NO TIRE ERROR. VA SIEMPRE!!!

app.get("/", (req, res) => {
  res.json({ message: "Hola, mundo! Este es mi primer API con Node.js y Express" }); 
});

//EN POSTMAN: CONSULTAR

//ERROR GRAVISIMO -> TODOS LOS METODOS SON ASINCRONOS EN SEQUELIZE!!!! CORREGIR EN SERVICE
app.get("/products", async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products); //codigo 200 OK
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        }           
}); 

app.post("/products", async(req, res) => { //PARA VER QUE FUNCIONA SE DEBE GRABAR EN LA BSE DE DATOS COMO FILA!!! NO BASTA CON EL MESSAGE DE EXITOSO
    try {
            const data = req.body
            if (data){
                await addProduct(data)
                res.json({message: "Se registro exitosamente!"})
            }else{
                 res.status(400).json({message:  "Se esperaba objeto producto"})   
            }

        } catch (error) {
            res.status(500).json({ error: "Error al crear el producto" });
        }           
}); 




app.listen(3000, async() => {
    //cuando el sv se ponga a escuchar en el puerto que cree la BD -> imporamos la BD
    await cnn_db.sync({})    //ES ASINCRONO SI O SI VA ASYNNC AWAIT!!! Se le puede pasar nada o un parametro CONSULTAR. Sincroniza mi modelo con la tabla, ante filas nuevas las agrega, ante nuevas columnas se puede ronmper
    console.log("Base de datos sincronizada");
    console.log("Servidor escuchando en http://localhost:3000");
}); 
