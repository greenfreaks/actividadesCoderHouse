/* 
    * Para ejecutar las fucniones para trabajar archivos de manera asincrónica, lo únici que hay que hacer es
    no agregar la palabra 'Sync' al final del nombre de la función

    * Para manejar los archivos con callBacks, debemos de agregar un parámetro extra (el callBack) a  las funciones para
    trabajar archivos, esta función Callback, como convención, recibe 2 parámetros (error, contenido):
        -> error: se ejecutará en caso de que exista algún error durante la ejecución de la función.
        ->contenido: se dan instrucciones para definir que se hará con el archivo
*/

const fs = require("fs");


// Leer archivo
const sinError = fs.readFile('./files/texto.txt', 'utf-8', (error, contenido) =>{
    if(error){
        console.log('La ruta del archivo no existe');
    }else{
        console.log(contenido);
    }
});
const conError = fs.readFile('.files/texto.txt', 'utf-8', (error, contenido) =>{
    if(error){
        console.log('La ruta del archivho no existe');
    }else{
        console.log(contenido);
    }
});

// Sobre escribir archivo

fs.writeFile('./files/texto.txt', 'Texto sobreescrito usando callbacks', (error, contenido) =>{
    if(error){
        console.log('La ruta no existe');
    }else{
        console.log('Texo cambiado exitosamente');
    }
});

// Agregar contenido a un archivo

fs.appendFile('./files/texto.txt', '\nTexto agregado mediante Callback', error =>{
    if(error){
        console.log('NO fue posible añadir un texto, ocurrió un error');
    }else{
        console.log('Texto añadido exitosamente');
    }
})

// Borra un archivo
fs.unlink('./files/borrar.txt', error =>{
    if(error){
        console.log('El archivo que deseas borrar no existe');
    }else{
        console.log('El archivo se ha borrado');
    }
})

// Crear una nueva carpeta
// mkdir('/ruta'): crea una nueva capeta
fs.mkdir('./files/nuevaCarpetaDesdeCallback', error =>{
    if(error){
        console.log('No fue posible agregar una nueva carpeta, es posible que ya exista')
    }else{
        console.log('La carpeta fue creada');
    }
})

fs.readdir('./files/carpeta', (error, nombres) =>{
    if(error){
        console.log('no se pudo leer el contenido de la carpeta')
    }else{
        console.log(nombres);
    }
})


