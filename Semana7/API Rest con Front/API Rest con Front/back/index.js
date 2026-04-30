import express from 'express';
import usersRouter from './routers/users.js';
import { cnn_db } from './data/cnn-sequelize.js';
import cors from 'cors'

const app = express();
app.use(cors()); 
app.use(express.json());

app.use(usersRouter);

//interceptar todas las rutas para manejar errores globalmente
//middleware se puede usar para manejo de errores, para manejo de permisos, entre otros
app.use((err, req, res, next) => {
    res.status(500).json({ error: "Error interno del servidor" })
})

app.listen(3000, async () => {
    await cnn_db.authenticate();
    console.log('Servidor en http://localhost:3000');
});