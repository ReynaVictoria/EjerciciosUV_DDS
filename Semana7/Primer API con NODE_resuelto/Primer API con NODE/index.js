import express from "express";
import { getAllProducts, addProduct } from "./services/products-service.js";    
//import db from './data/db-init.js'
import { cnn_db } from "./data/cnn-sequelize.js";
import {login} from "./services/users-service.js"
 
const app = express(); //server
app.use(express.json())


app.get("/", (req, res) => {
  res.json({ message: "Hola, mundo! Este es mi primer API con Node.js y Express" }); 
});


app.get("/products", async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products); //codigo 200 OK
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        }           
}); 

app.post("/products", async (req, res) => {
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


// LUEGO DE HACER EL USER -> VOY A NECESITAR OTRO ENDPOINT

// FUNCIONA PARA UN LOGIN HACER UN GET?? NOOO, TIENE QUE SER POST
// JAMAS UN LOGIN VA POR GET, ESTARIA MANDANDO MI PASSWORD

//como bajan los datos del usuario en el req -> en el body
app.post("/login", async (req, res) => {
    try{
        const data = req.body
        if (!data){
            res.status(400).json({message:  "Se esperaba objeto usuario"}) // por que validaria que venga un data? porque estaria mal armada la peticion, bad request 400
        }
        // si no viene el dato devuelvo 400
        // si viene el dato:
        const userFound = await login(data) // COMO LA DEFINI CON ASYNC TENGO QUE PONER EL AWAIT
       
        if (userFound){
            res.json({message: "Credenciales validas", user: userFound}) //ESTO ES UN 200 POR DEFAULT, PREGUNTA CONCEPTUAL
        }
        else{
            res.status(401).json({message: "Correo y/o contraseña incorrectas"}) // el 404 seria si busco un usuario pero no lo encuentra,en este caso va mas por el lado de acceso y seguridad
        } 


    }
    catch(error){
        console.log(error)
        res.status(500).json({error: "Error al loguear"}) //ERROR 500 DEL SERVIDOR
    }
})


app.listen(3000, async() => {
    await cnn_db.sync({})
    console.log('Base de datos sincronizada')
    console.log("Servidor escuchando en http://localhost:3000");
}); 
