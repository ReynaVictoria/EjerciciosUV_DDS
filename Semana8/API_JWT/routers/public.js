import express from 'express'
import usersService from '../service/users-service.js'
import jt from '../utils/jwt.js'

const router = express.Router()

//public router
router.get('/', (req, res) => {
    res.json({messaje:'Este es el route publico /home'})
})

//AL LOGIN VAMOS SIEMPRE POR POST PORQUE LOS DATOS VAN EN EL BODY, NO COMO PARAMETROS

// Formas de ir a la API
// con GET se va por la URL, se mandan las cosas por parametros o query. NO SE PUEDE MANDAR EL PASSWORD POR LA URL!!!

router.post('/login', (req, res) => {
    const data = req.body
    const user = usersService.login(data)
    // const {username, password} = req.body //sacame el usuario o el password del body. OBJETO ANONIMO, DESESTRUCTURAR EL OBJETO
    
    if(user){
        const jwtToken = jt.generateToken(user)
        res.json({message: jwtToken}) //EN EL POSTMAN DEVUELVE ESTE TOKEN
        // aca deberia generar un token JWT y enviarlo al cliente
        // necesitamos una libreria

        
    } else {res.status(401).json({message:'Credenciales inválidas'})}


})

export default router