function enrutar(manejador, ruta, respuesta){
	console.log("Voy a Rutear algo para " + ruta);
	
	if(typeof manejador[ruta] === 'function'){
		manejador[ruta](respuesta);
	}else{
		console.log("No Existe Función para esa ruta " + ruta );
	}
}

exports.enrutar = enrutar;