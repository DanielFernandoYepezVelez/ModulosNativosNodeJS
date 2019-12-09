class Http {
    getInformation() {
        const http = require('http');
        require('colors'); //Agregar colores a los mensajes por consola

        http.createServer((req, res) => {
            console.log(" ")
            res.writeHead(200, { 'Content-type': 'text/html' });
            console.log('Module Para Crear Un Servidor http');
            res.write('<h1>Hola Mundo</h1>');
            console.log('Server On Port 3000'.red);
            res.end();
        }).listen(3000);
    }
}

module.exports = Http;