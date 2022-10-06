/*
    * 1. Guarde en un archivo llamado fyh.txt la fecha y hora actual.
    * 2. Lea nuestro propio archivo de programa y lo muestre por consola.
    * 3. Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).
*/

const fs = require("fs");
let currentDate = new Date()

try{
    const createFile = fs.writeFileSync('./files/fyh.txt', `La fecha y hora actual es ${currentDate.toDateString()}`)
} catch(err){
    console.log('La ruta donde quieres crear el archivo no existe');
}

