const fs = require('fs');
const util = require('util')
console.log("Probando desde nodejs")
const ejemplo = fs.readFileSync("Hola.txt", "utf-8");

console.log(ejemplo)
console.log("Ya se tuvo que abrir el archivo")


console.log("Async code...")

const init = async()=>{
const read = util.promisify(fs.readFile)
const response = await read("Hola.txt", "utf-8");	
console.log(response)
}

init()