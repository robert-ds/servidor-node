function inicio(respuesta){
	console.log("Has entrado en la Página de Inicio");
	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("Esta es la Página de Inicio");
	respuesta.end();

	/* var ahora = new Date().getTime();
	while(new Date().getTime() < ahora + 10000);

	return "inicio"; */

}

function pagina1(respuesta){
	console.log("Has entrado en la Página 1");
	
	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("Esta es la Página 1");
	respuesta.end();

	 /* return "pagina1"; */
}

function pagina2(respuesta){
	console.log("Has entrado en la Página 2");
	
	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("Esta es la Página 2");
	respuesta.end();

	/* return "pagina2"; */
}

function favicon(respuesta){
	console.log("Se ha Pedido el Favicon");
	
	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("");
	respuesta.end();

	/* return ""; */
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;