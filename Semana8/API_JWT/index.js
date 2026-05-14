import express from 'express'
import cors from 'cors'
import publicRouter from './routers/public.js'
import privateRouter from './routers/private.js'


const app = express()

app.use(cors())

app.use(express.json())

app.use('/public', publicRouter)

app.use('/api', privateRouter)
//CADA VEZ QUE HAGO APP.USE ES UN MIDDLEWARE, LOS ROUTERS EN EXPRESS SON MIDDLEWARES



app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});

//la API va a tener rutas publicas y privadas
//public: home y login
//private: products y users

// Routers y middleware para separar lo publico y privado