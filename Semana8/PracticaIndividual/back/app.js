import express from 'express'
import ProductsRouter from './routes/products.routes.js'


const app = express()
app.use(express.json())

app.use('/products', ProductsRouter)
export default app