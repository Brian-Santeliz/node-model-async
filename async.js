const fs = require('fs');
const util = require('util');

	const readPromise = util.promisify(fs.readFile)

	console.log("Empezando a leert")
	readPromise("Hola.txt", "utf-8")
		.then(console.log)
		.catch(console.log)

	// CALLBACK
	// fs.readFile("Hola.txt", "utf-8", (error, respuesta)=>{
	//	console.log(respuesta)
	//})
		
	console.log("Ya termino")
	console.log(process.uptime());




// bloquea la ejecucion del codigo ASYNC-AWAIT
// const response = await readPromise("Hola.txt", "utf-8")
// console.log(response)