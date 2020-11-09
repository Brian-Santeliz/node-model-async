const fs = require('fs');
const util = require('util');

const init = async()=>{
try{
	//soporta promesa al metodo de leer
	const read = util.promisify(fs.readFile);
	//le el archibo
	console.log("Ejemplo")
	const response = await read("Hola.txt", "utf-8");	
	console.log(response)
	console.log(process.uptime());

}catch(e){
	console.log(e);
}
}

init();
