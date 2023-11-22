
const { ObjectId } = require('mongodb');
const {
    conectarBD
} = require('../conexion/bd');


const obtenerMascotas = async (peticion, respuesta) => {
    let resultado;
    try {
        const bd = await conectarBD();
        const mascotasCollection = bd.collection('mascota');
        resultado = await mascotasCollection.find({

        }, {
            projection: {

            }
        }).toArray();
    } catch (error) {
        console.log(error);
    }
    respuesta.send({
        mensaje: 'Obtener todas las mascotas',
        resultado
    });
};

const obtenerMascota = (peticion, respuesta) => {
    respuesta.send({
        mensaje: `Obtener mascota: ${peticion.params.id}`
    });
};

const crearMascota = async (peticion, respuesta) => {
    let resultado;
    const {
        nombre
    } = peticion.body;
    try {
        const bd = await conectarBD();
        const mascotasCollection = bd.collection('mascota');
        resultado = await mascotasCollection.insertOne({
            nombre: nombre,
        });
        //console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    respuesta.send({
        mensaje: 'Crear mascota'
    });
};

const modificarMascota = async (peticion, respuesta) => {
    let resultado;
    const {
        id
    } = peticion.params;

    const {
        nombre
    } = peticion.body;

    const idO = new ObjectId(id);

    try {
            const bd = await conectarBD();
            const mascotasCollection = bd.collection('mascota');
            resultado = await mascotasCollection.updateOne({ _id: idO }, { $set: {
                nombre: nombre
            }
         });
            console.log(resultado);
        } catch(error) {
            console.log(error);
        }
    respuesta.send({
            mensaje: `Modificar mascota: `
        });
    };

    const eliminarMascota = async (peticion, respuesta) => {
        let resultado;
        const {
            id
        } = peticion.params;
        const idO = new ObjectId(id);
        try {
            const bd = await conectarBD();
            const mascotasCollection = bd.collection('mascota');
            resultado = await mascotasCollection.deleteOne({ _id: idO });
            //console.log(resultado);
        } catch (error) {
            console.log(error);
        }

        respuesta.send({
            mensaje: `Eliminar mascota:`
        });
    };

    module.exports = {
        obtenerMascotas,
        crearMascota,
        obtenerMascota,
        modificarMascota,
        eliminarMascota
    };