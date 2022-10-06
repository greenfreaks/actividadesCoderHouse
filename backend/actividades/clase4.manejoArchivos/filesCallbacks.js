/* 
    * Para ejecutar las fucniones para trabajar archivos de manera asincrónica, lo únici que hay que hacer es
    no agregar la palabra 'Sync' al final del nombre de la función

    * Para manejar los archivos con callBacks, debemos de agregar un parámetro extra (el callBack) a  las funciones para
    trabajar archivos, esta función Callback, como convención, recibe 2 parámetros (error, contenido):
        -> error: se ejecutará en caso de que exista algún error durante la ejecución de la función.
        ->contenido: se dan instrucciones para definir que se hará con el archivo
*/

const fs = require("fs");

const sinError = fs.readFile('./files/texto.txt', 'utf-8', (error, contenido) =>{
    if(error){
        console.log('La ruta del archivho no existe');
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
