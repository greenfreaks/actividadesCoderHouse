/*  
    * ---------------------------ACTIVIDAD---------------------------------
    * 1. Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
    Esto creará un archivo especial (lo veremos más adelante) de nombre package.json

    * 2. Lea el archivo package.json
    * 3. Muestre por consola el objeto info luego de leer el archivo
    * 4. Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
    * 5. Incluir el manejo de errores (con throw new Error)
    * 
    * ------------------------------ACLARACIONES----------------------------
    * 1. Utilizar la lectura y escritura de archivos en modo asincrónico con callbacks.
    * 2. Para deserializar un string con contenido JSON utilizar JSON.parse (convierte string en object).
    * 3. Para serializar un objeto (convertirlo a string) y guardarlo en un archivo utilizar JSON.stringify.
    * 
    * --------------------------------AYUDA-------------------------------------------
    * 1. Para el Punto 3 considerar usar JSON.stringify(info, null, 2) para preservar el formato de representación del objeto en el archivo (2 representa en este caso la cantidad de espacios de indentación usadas al representar el objeto como string).
*/

const fs = require('fs');

// 1.

fs.readFile('./package.json', 'utf-8', (error, contenido) =>{
    if(error){
        console.log('El archivo no pudo ser leído');
    }else{
        console.log(contenido);
    }
});

// 2.
