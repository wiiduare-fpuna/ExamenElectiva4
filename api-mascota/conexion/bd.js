const {
    MongoClient
} = require('mongodb');

const url = 'mongodb://localhost:27017/mascota';

async function conectarBD() {
    const cliente = new MongoClient(url, {});
    try {
        await cliente.connect();
        console.log('Conexión a MongoDB establecida');
        return cliente.db();
    } catch (error) {
        console.error('Error al conectar a MongoDB', error);
        throw error;
    }
}

module.exports = {
    conectarBD
};