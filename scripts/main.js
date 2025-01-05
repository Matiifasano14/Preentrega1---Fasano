
const nombre = prompt("Ingresa tu nombre")
let medioCotizacion;

while(true){

    medioCotizacion = prompt("Bienvenido/a "+ nombre + " ingresa 1 si quieres recibir atencion por WhatsApp o ingresa 2 si quieres generar tu cotizacion Online")

    if (medioCotizacion === "1" || medioCotizacion === "2"){
        break;
    }
    else{
        alert("Elige una opcion correcta")
    }
}

while(true){
    if (medioCotizacion == 1){ 
        alert("Nuestro numero de WhatsApp es: 3382456789, recuerda que tambien puedes acercarte a nuestras oficinas en Mitre 887 Rosario, Santa fe")
        break;
    }
    else if (medioCotizacion == 2) {
        alert("A continuacion vamos a generar tu cotizacion online")
        break;
    }

    else{
        alert("Elige una opcion correcta")
    }
}

let precioDestino;
let destino;
let comboDescuento1;
let comboDescuento2;

while(true){
    destino = parseInt(prompt("¿A donde quieres viajar? \n Elige la opcion deseada \n Opcion 1 - Salta $30000 \n Opcion 2 - Bariloche $70000 \n Opcion - 3 Cataratas del Iguazu $30000 \n Opcion - 4 Ushuaia $60000"));

    if (destino === 1){
        precioDestino = 30000
        comboDescuento1 = 1;
        break;
    }
    else if (destino === 2){
        precioDestino = 70000
        comboDescuento1 = 1;
        break;
    }
    else if(destino === 3){
        precioDestino = 30000
        comboDescuento1 = 1;
        break;
    }
    else if (destino === 4){
        precioDestino = 60000
        comboDescuento1 = 1;
        break;
    }
    else{
        alert("Ingrese una opcion correcta")
    }
}

let precioHotel;
let hotelSalta;
let hotelBariloche;
let hotelIguazu;
let hotelUshuaia;

while (destino == 1){

    hotelSalta = prompt("En que hotel te gustaria hospedarte?\n Opcion 1 - Hotel Salta $50000 \n Opcion 2 - Hotel Iruya $40000 \n Opcion 3 - No quiero reservar hotel")

    if (hotelSalta == 1){
        precioHotel = 50000
        comboDescuento2 = 1
        break;
    }
    else if (hotelSalta == 2){
        precioHotel = 40000
        comboDescuento2 = 1
        break;
    }
    else if (hotelSalta == 3){
        precioHotel = 0
        break;
    }
    else{
        alert("Opcion incorrecta, vuelve a intentarlo")
    }
}

while (destino == 2){

    hotelBariloche = prompt("En que hotel te gustaria hospedarte?\n Opcion 1 - Hotel Bariloche $90000 \n Opcion 2 - Gran Melia $140000 \n Opcion 3 - No quiero reservar hotel")

    if (hotelBariloche == 1){
        precioHotel = 90000
        comboDescuento2 = 1
        break;
    }
    else if (hotelBariloche == 2){
        precioHotel = 140000
        comboDescuento2 = 1
        break;
    }
    else if (hotelBariloche == 3){
        precioHotel = 0
        break;
    }
    else{
        alert("Opcion incorrecta, vuelve a intentarlo")
    }
}

while (destino == 3){

    const hotelIguazu = prompt("En que hotel te gustaria hospedarte?\n Opcion 1 - Gran Melia Iguazu $190000 \n Opcion 2 - Magestic $40000 \n Opcion 3 - No quiero reservar hotel")

    if (hotelIguazu == 1){
        precioHotel = 190000
        comboDescuento2 = 1
        break;
    }
    else if (hotelIguazu == 2){
        precioHotel = 40000
        comboDescuento2 = 1
        break;
    }
    else if (hotelIguazu == 3){
        precioHotel = 0
        break;
    }
    else{
        alert("Opcion incorrecta, vuelve a intentarlo")
    }
}


while(destino == 4){ 
    hotelUshuaia = prompt("En que hotel te gustaria hospedarte?\n Opcion 1 - Hotel Fin del Mundo $90000 \n Opcion 2 - Hotel Snow $55000 \n Opcion 3 - No quiero reservar hotel")

    if (hotelUshuaia == 1){
        precioHotel = 90000
        comboDescuento2 = 1
        break;
    }
    else if (hotelUshuaia == 2){
        precioHotel = 55000
        comboDescuento2 = 1
        break;
    }
    else if (hotelUshuaia == 3){
        precioHotel = 0
        break;
    }
    else{
        alert("Opcion incorrecta, vuelve a intentarlo")
    }
}

let precioTotal;
let precioConDescuento;

function sumar (){
    precioTotal = precioHotel + precioDestino;
    alert("El precio total es: "+ precioTotal)
}

sumar()

if ((comboDescuento1 == 1) && (comboDescuento2 == 1)){

    precioConDescuento = (precioTotal * 80) / 100;

    alert("Por contratar ambos servicios con nosotros te hacemos un descuento del 20%, el total a pagar te queda en: $"+ precioConDescuento)
}

class paqueteComprado {
    ciudad = "";
    hotel = "";
    precio = "";
    constructor (ciudad, hotel, precio){
        this.ciudad = ciudad;
        this.hotel = hotel;
        this.precio = precio;
    }
}

const UnPaqueteComprado = new paqueteComprado ("salta", "iruya", 56.000);

console.log ("El paquete que compraste tiene destino a " + this.ciudad + " en el hotel " + this.hotel + " y tiene un costo de " + this.precio)

console.log (UnPaqueteComprado.toString());

class facturaCompra {
    id ="";
    cliente = "";
    paquete = "";
    detalle = "";

    constructor (id, cliente, paquete, detalle){
        this.id;
        this.cliente;
        this.precio;
        this.detalle;
    }
}