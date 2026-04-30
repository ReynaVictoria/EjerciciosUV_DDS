import express from "express"
import { login } from "../services/users.js"

const usersRouter = express.Router()

usersRouter.post("/login", async (req, res) => {
    try {
        console.log('Login request received')
        const user = req.body
        console.log(user)
        const userFound = await login(user) 
        
        if (userFound){
            res.json(userFound)
        }else{
            res.status(401).json({ error: "Usuario y/o clave incorrectos" })
        }

   } catch (error) {
       
   }
})

export default usersRouter