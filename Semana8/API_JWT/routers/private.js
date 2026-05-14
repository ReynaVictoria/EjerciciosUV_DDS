import express from 'express'
import productsService from '../service/products-service.js'
import {autenticar} from '../utils/security.js'

const router = express.Router()

router.use(autenticar) //SOLO ESTA LINEA YA HACE QUE TODO LO DE ABAJO SEA SEGURO!!!!!!!!!!
//ANTES DE PROCESAR TODAS LAS 4UTAS Y VALIDAR UNA POR UNA USAMOS UN MIDDLEWARE

router.get('/products', (req, res) => {

    try {
        const products = productsService.getAllProducts()
        res.json(products)


    } catch (error) {
        res.status(500).json({message:'Error al obtener los productos'})
    }
}
)

export default router