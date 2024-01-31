import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {  //req = lo que enviamos - res= lo que express nos responde
    res.render('inicio');
});

router.get('/nosotros', (req, res) => {  //req = lo que enviamos - res= lo que express nos responde
    const viajes = 'Viaje a España';
    res.render('nosotros', {
        viajes,
    });
});

router.get('/contacto', (req, res) => {  //req = lo que enviamos - res= lo que express nos responde
    res.send('Contacto');
});

export default router;