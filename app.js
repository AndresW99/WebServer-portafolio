const express = require('express');
require('dotenv').config();

const app  = express();
const port = process.env.PORT; 

// Servir contenido estatico
app.use( express.static('public') );

// Esto es un comodin por si van a una ruta que no existe
app.get('*', ( req, res) => {
    res.sendFile( __dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${ port }`);
});