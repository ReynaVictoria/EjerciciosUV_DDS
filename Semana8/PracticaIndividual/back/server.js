import app from './app.js'
import { cnn } from './data/cnn_sequelize.js'

async function startServer() {
    try {
        await cnn.sync(); // primero DB

        app.listen(3000, () => {
            console.log('Server en http://localhost:3000');
        });

    } catch (error) {
        console.log("Error iniciando server:", error);
    }
}

startServer();