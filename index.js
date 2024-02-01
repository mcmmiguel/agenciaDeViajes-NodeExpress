import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la db
db.authenticate()
    .then(() => console.log('BD conectada'))
    .catch(error => console.log(error))

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    next();
})

// Agregar bodyparser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});

