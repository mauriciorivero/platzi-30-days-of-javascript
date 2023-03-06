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