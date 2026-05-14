import jt from './jwt.js'

export const autenticar = (req,res,next) => { //esto es un middwale, tiene los 3 parametros
    const jwtClient = req.headers['authorization']

    if(!jwtClient){
        res.status(401).json({message:'Acceso no autorizado'})

    }
    const token = jwtClient.split(' ')[1]  // Que hace esta linea: parte con el espacio y toma el 2do (0 1). OBTIENE LA TARJETITA
    const decoded = jt.verifyToken(token)
    if(!decoded){
        res.status(401).json({messaje: 'Token invalido'})
    }
    
    
    next()
}

//split parte en tantas partes la palabra segun cuantas veces ecuentra un patron

//autoriztion: beared ' ' jwt POR PROTOCOLO HTTP VUELVE ESTO