/*
Estos son tipos de datos numeros
*/

var edad = 30;
var temperatura = 37.5;

//tambien se pueden expresas numeros en notacion cientifica
var numeroGrande = 1e6; //un millon
var numeroPequeno = 1e-6 //0.000001

/*
Estos son tipos de datos de cadena de texto
*/

var marcaCarro="Chevrolet";
var modeloCarro="Onyx";

//se pueden concatenar textos como sumas con el operador +
console.log("El carro es: "+marcaCarro+" modelo: "+modeloCarro);

//Los templates literals se pueden usar para concatenar strings que incluyen variables y expresiones
console.log(`El carro es, ${marcaCarro} ${modeloCarro}!`);


//Tipos de datos que manejen vacios o nulos
const escuela = null;
console.log("El valor para escuela es: "+escuela);

//Un valor undefined es que no se ha definido
let metodologia;
console.log("El valor para metodologia es: "+metodologia);


//La diferencia entre los dos anteriores es que uno puede tener un valor vacio intencionalmente, el otro es simplemente que no se ha inicializado con ningún valor

const actividad = {
    nombre: "Actividad 1",
    likes: 3,
    autor: null
}

console.log("El nombre de la actividad es: "+actividad["nombre"]+" los likes son: "+actividad["likes"]+" y el autor es: "+actividad["autor"]);



//Creación de simbolos
const idUsuario = Symbol("Identificador único de usuario");

let usuario = {
    [idUsuario]: "identificador unico",
    nombre: "Mauricio",
    apellido: "rivero",
    correo: "mauro@mrd2.co"
}

console.log(usuario[idUsuario]);