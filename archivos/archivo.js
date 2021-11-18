const fs = require('fs')

const data = fs.readFileSync('un_archivo.txt', 'utf-8');
console.log(data)


let filename = 'un_archivonuevo.txt'
//Escribiendo en archivo 
fs.writeFileSync(filename, 'nueva escrituraa')

// Agregar texto a un archivo 
fs.appendFileSync(filename, 'Aplicando ejemplo')