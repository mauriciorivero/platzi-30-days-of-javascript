//Esta es la forma de declarar una funcion para luego ser llamada

function mostrarNombre(nombre){
    //Lo que está dentro de los parentesis anteriores es el argumento de entrada
    //lo que está entre las dos llaves son las instrucciones de la función.
    console.log("El nombre es: "+nombre);
}

function mostrarNombreEdad(nombre, edad){
    /*
    Las funciones pueden tener mas de un argumento de entrada
    y tambien pueden tener mas de una instrucción en su bloque de ejecución
    */ 
    console.log("El nombre es: "+nombre);
    console.log("La edad es: "+edad);
}

//para llamar a una función simplemente se usa su nombre se abren los parentesis
//y se ingresan sus parametros (el valor de un argumento)

mostrarNombre(nombre);//en este ejemplo se envia como parametro el valor de la variable nombre que ya esta en el otro archivo js
mostrarNombreEdad(nombre, edad); //en este ejemplo se envia como parametro el valor de la variable nombre y edad que ya esta en el otro archivo js

function sumaEnteros(numeroA, numeroB){
    return numeroA+numeroB;;
}

let resultado = sumaEnteros(5,2);
console.log(resultado);// el resultado aquí sería 7

//Estas son las formas mas comunes de declarar e invocar funciones pero realmente hay 3

//La primera es la IIFE (Immediately Invoke Function Expresion) Son funciones que se ejecutan una sola vez y son anonimas
(function (){
    console.log("Soy una IIFE");
}) ();

//Funcion expresion, pueden ser reutilizadas y asignadas a una variable
let saluda = function(){
    console.log("Hola!");
};

saluda();

//Arrow function es una forma concisa de escribir funciones y es recomendable usarla cuando las instrucciones dentro de ella
//son de una sola linea
let saludaArrow = () => console.log("Saludando desde una arrow");
saludaArrow();
