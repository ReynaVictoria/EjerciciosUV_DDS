// por un lado recibe el papelito y lo firmamos: GENERAR JWT
// por el otro recibo la firma y lo verifico: VALIDAR JWT

import jwt from 'jsonwebtoken'

function generateToken(user){
    const playload = {
        id: user.id,
        username: user.username
    }
    return jwt.sign(playload, 'ACME123', {expiresIn:'1h'}) //firma el objeto con la palabra clave
}

function verifyToken(token){
    try {
        return jwt.verify(token, 'ACME123')
    } catch (error) {
        return null        
    }

}

export default {generateToken, verifyToken}