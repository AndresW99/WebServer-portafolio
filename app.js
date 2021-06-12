const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app  = express();
const port = process.env.PORT; 

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

// Esto es un comodin por si van a una ruta que no existe
app.get('*', ( req, res) => {
    res.sendFile( __dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${ port }`);
});