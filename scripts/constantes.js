let destinosTuristicos = [
    {
        nombre: "salta",
        hotel: "Hotel salta",
        precio: "$80.000",
        tipo: "cultura",
    },
    {
        nombre: "salta",
        hotel: "Hotel iruya",
        precio: "$56.000",
        tipo: "cultura",
    },
    {
        nombre: "salta",
        hotel: "Sin hospejade",
        precio: "$30.000",
        tipo: "cultura",
    },
    {
        nombre: "Bariloche",
        hotel: "Bariloche",
        precio: "$128.000",
        tipo: "naturaleza",
    },
    {
        nombre: "Bariloche",
        hotel: "Melia",
        precio: "$168.000",
        tipo: "naturaleza"
    },
    {
        nombre: "Bariloche",
        hotel: "Sin hospedaje",
        precio: "$70.000",
        tipo: "naturaleza"
    },
    {
        nombre: "Cataratas del Iguazu",
        hotel: "Gran Melia Iguazu",
        precio: "$176.000",
        tipo: "naturaleza"
    },
    {
        nombre: "Cataratas del iguazu",
        hotel: "Magestic",
        precio: "$56.000",
        tipo: "naturaleza"
    },
    {
        nombre: "Cataratas del iguazu",
        hotel: "Sin hospedaje",
        precio: "$30.000",
        tipo: "naturaleza"
    },
    {
        nombre: "Ushuaia",
        hotel: "Fin del mundo",
        precio: "$120.000",
        tipo: "cultura",
    },
    {
        nombre: "Ushuaia",
        hotel: "Snow",
        precio: "$92.000",
        tipo: "cultura",
    },
    {
        nombre: "Ushuaia",
        hotel: "Sin hospedaje",
        precio: "$60.000",
        tipo: "cultura",
    },
];


// Objeto agencia con un método de búsqueda y filtrado
const agenciaTurismo = {
    destinos: destinosTuristicos,

    // Método para filtrar destinos por tipo
    filtrarPorTipo: function (tipo) {
        return this.destinos.filter(destino => destino.tipo.toLowerCase() === tipo.toLowerCase());
    },

    // Método para buscar destinos por nombre
    buscarPorNombre: function (nombre) {
        return this.destinos.filter(destino => destino.nombre.toLowerCase().includes(nombre.toLowerCase()));
    },
};

debugger

// Filtrar destinos de tipo
console.log(agenciaTurismo.filtrarPorTipo('cultura'));

// Buscar destinos
console.log(agenciaTurismo.buscarPorNombre("salta"));
