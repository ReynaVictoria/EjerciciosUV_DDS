import * as sqlite3 from 'sqlite3'

const db = new sqlite3.default.Database("./data/products.sqlite", sqlite3.OPEN_READWRITE, (err) => {
//crea una base de datos con el nombre de archivo: ./data/products.sqlite
//manda una callback con el error que se ejecuta despues de crear la BD
    if (err) {
        console.error(err.message);
    }
})

export default db
//exportamos el objeto de la BD