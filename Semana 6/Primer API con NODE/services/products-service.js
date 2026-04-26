/*const products = [
    { id: 1, name: 'Producto 1', price: 10.99, stock: 100 },
    { id: 2, name: 'Producto 2', price: 19.99, stock: 50 },
    { id: 3, name: 'Producto 3', price: 5.99, stock: 200 },
];
*/
//REMPLAZAMOS ESTO POR LAS FILAS DE LA TABLA


//QUE NECESITA EL SERVICE PARA ACCEDER A LA BD -> LA CONEXION O EL MODELO??? NECESITA EL MODELO PORQUE ÉL CONOCE YA A LA CONEXION... CONSULTAR SI ESTA BIEN

//fundAll({where:{condicion}})

export async function getAllProducts() {
    return await products.findAll();
}

export async function addProduct(p){
    await products.create(p)  
}

