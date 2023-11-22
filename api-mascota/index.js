const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const puerto = 3001

app.use(morgan('combined'))
app.use(express.json());
app.use(cors())

const rutaMascota = require('./ruta/mascota');

app.use('/mascota', rutaMascota);

app.listen(puerto, () => {
    console.log(`Servicio en el puerto ${puerto}`)
})