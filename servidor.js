var servidor = require('http');

function arrancaServidor(requiere, respuesta){
	console.log("Alguien se ha Conectado");
	respuesta.writeHead(200, {"Content-type":"text/html"});
	respuesta.write("<h1>El Servidor Funciona Correctamente</h1>");
	respuesta.end();
}

servidor.createServer(arrancaServidor).listen(8080);
