const productos = [
{id: 1, nombre: 'Escuadra', precio: 323.5},
{id: 2, nombre: 'Calculadora', precio: 500.3},
{id: 3, nombre: 'Globo terraqueo', precio: 150},
{id: 4, nombre: 'Paleta Pintura', precio: 863.6},
{id: 5, nombre: 'Reloj', precio: 1000.00}
]

const salida = productos.map((unProducto) => unProducto.nombre);

// 1. Obtenga los nombres separados por comas

const salida2 = salida.join(','); // Separa los elementos de un array en comas
console.log(salida2)

// 2. El promedio del precio de la suma todos los productos

// 3. EL producto con menor precio
const comp = (a, b) =>{
    if(a.precio < b.precio);
}
// 4. El producto con el mayor precio

const pepe = [];
