function getAllProducts() {
    //deberia ir al modelo de sequelize y hacer un findall

    return[
        {
            id:1,
            name:'Producto 1',
            price:50
        }

    ]
}

export default {getAllProducts}