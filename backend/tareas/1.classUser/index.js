class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return console.log(
      `El nombre completo del usuario es: ${this.nombre} ${this.apellido}`
    );
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  getCantidadMascotas(cantMascotas) {
    return console.log(`Tiene ${cantMascotas} mascotas`);
  }

  addBook(nombre, autor) {
    this.libros.push({
      nombre: nombre,
      autor: autor,
    });
  }

  getBookNames() {
    let arrayNombreLibros = [];
    this.libros.forEach((libro) => arrayNombreLibros.push(libro.nombre));
    this.libros.forEach((libro) =>arrayNombreLibros.push(libro.autor))
    return arrayNombreLibros;
  }

  showBookNames(nombreLibros) {
    nombreLibros.forEach((nombre, autor) => {
      console.log(`El nombre del libro es: ${nombre} y el autor es: ${autor}`);
    });
  }
}

const usuario = new Usuario(
  "Mario",
  "Sandoval Velázquez",
  [
    { nombre: "NOS4A2", autor: "Joe Hill" },
    { nombre: "Cartas de amor a los muertos", autor: "Ava Dellaira" },
    {nombre: "Ciudad de hueso", autor: "Cassandra Clare"}
  ],
  ["perro", "serpiente", "koala"]
);

usuario.getFullName();
usuario.addMascota();
let cantMascotas = usuario.countMascotas();
usuario.getCantidadMascotas(cantMascotas);
usuario.addBook();
let arrayNombreLibros = usuario.getBookNames();
usuario.showBookNames(arrayNombreLibros);