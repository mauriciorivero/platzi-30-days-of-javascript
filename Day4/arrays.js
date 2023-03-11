/**
 * Los arrays son estructuras de datos para almacenar objetos, 
 * estos objetos pueden ser, bueno, objetos o tipos de datos primitivos
 *  
 */

var miArrayFamilia = ['Mauricio', 'Teo','Abel','Myriam','Aracelly','Maria','Mateo','Roger','Jose'];
//con un simple console.log puedo ver todos los elementos del array
console.log(miArrayFamilia);

//para ver el total de elementos de un array
var miArrayFamilia = ['Mauricio', 'Teo','Abel','Myriam','Aracelly','Maria','Mateo','Roger','Jose'];
console.log("El total de elementos del array mi familia es: "+miArrayFamilia.length);

//Si quiero agregar un elemento al final del array uso la función push
var miArrayFamilia = ['Mauricio', 'Teo','Abel','Myriam','Aracelly','Maria','Mateo','Roger','Jose'];
miArrayFamilia.push("Laura Sofia");
console.log(miArrayFamilia);

//Si quiero saber cual es el valor de un elemento particular de un array uso los corchetes y le coloco el número del elemento que
//quiero revisar. Hay que tener en cuenta que los arrays inician con 0
var miArrayFamilia = ['Mauricio', 'Teo','Abel','Myriam','Aracelly','Maria','Mateo','Roger','Jose'];
console.log("El valor del elemento 4 del array es: "+miArrayFamilia[4]);

/**
 * Si quiero eliminar el ultimo elemento del array uso el metodo pop()
 */
var miArrayFamilia = ['Mauricio', 'Teo','Abel','Myriam','Aracelly','Maria','Mateo','Roger','Jose'];
miArrayFamilia.pop();
console.log("El array quedo como: "+miArrayFamilia);


/**
 * La función map permite aplicar una función a cada elemento del array, en este ejemplo voy a agregar un texto a cada elemento 
 */
var miArrayFamilia = ['Mauricio', 'Teo','Abel','Myriam','Aracelly','Maria','Mateo','Roger','Jose'];
const nuevaFamilia = miArrayFamilia.map(function (elemento) { 
    return elemento+" miembro";

 });
 console.log(nuevaFamilia);


function recorrerArrayFamilia(arrayFamilia){
    for (let i=0;i<arrayFamilia.length();i++){
        console.log("El mimebro "+i+" es: "+arrayFamilia[i]);
    }
}