const http = require('http');

http.createServer( ( req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write( 'Hola mundo' );
    // res.write( '1, Paola\n' );
    // res.write( '2, Anahi\n' );
    // res.write( '3, Pablo\n' );
    // res.write( '4, Luis\n' );
    res.end();

})
.listen( 8080 );

console.log('Escuchando el puerto', 8080 );