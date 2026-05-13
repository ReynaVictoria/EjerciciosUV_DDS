import Product from "../models/products.js";

//para obtener los productos

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();

        console.log(products);

        res.json(products);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            mensaje: error.message
        });
    }
};

export const createProducts = async (req, res) => {
    try {

        const product = await Product.create(req.body);

        res.status(201).json(product);

    } catch (error) {

        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({
                mensaje: "El producto ya existe"
            });
        }

        res.status(500).json({
            mensaje: error.message
        });
    }
};

export const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({
                mensaje: "El producto no existe"
            });
        }

        await product.destroy();

        res.status(200).json({
            mensaje: "Producto eliminado"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
}

export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({
                mensaje: "El producto no existe"
            });
        }

        await product.update(req.body); //toma los campos del body para el update

        res.status(200).json({
            mensaje: "Producto actualizado"
        });
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
}