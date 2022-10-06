const fs = require("fs"); //Se importa modulo nativo file system

//Se lee un archivo. Param1: '/rutaArchivo' || Param2. 'Codificación'
const dataRead = fs.readFileSync('./files/texto.txt', 'utf-8'); 
console.log(dataRead)

// Se sobreescribe e el texto de un archivo existente. Param1: 'rutaArchivo', Param2: 'Nuevo texto'
const dataOverwrite = fs.writeFileSync('./files/texto.txt', 'Prueba de cambio de texto') 

// Si no existe el archivo lo crea. Param1: 'nombreArchivo.txt', Param2: 'Contenido del archivo'
const dataNewFile = fs.writeFileSync('./files/nuevoArchivo.txt', 'Se crea nuevo archivo') 

// Añade más contenido a un archivo existente. Param1: 'nombreArchivo', Param2: 'contenido', Param3(opcional): 'codificación' || Si el archivo no exsite, lo crea
const dataAddContent = fs.appendFileSync('./files/texto.txt', '\nEsto es contenido agregado desde Js') 

// Se borra un archivo. Param1: 'rutaArchivo'
//const deleteFile = fs.unlinkSync('borrar.txt');

/*
    * MANEJO DE ERRORES try{function} catch(err){function}
    * Se pueden manejar lo errores que ocurran durante el manejo de archivoa:
        -> TRY{}: intentar una ejecución
        -> CATCH{}: hacer algo en caso de error al momento de la ejecución
*/

// try{
//     const readFile = fs.readFileSync('rutaNoExsite.txt');
// }catch(err){
//     console.log(err);
// }

