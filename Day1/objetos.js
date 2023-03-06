/*
    Sintaxis para crear objetos: Nombre de la variable (sea var, let o const) luego un operador de asignación = seguido de dos llaves {}
    Dentro del bloque una serie de elementos nombre propiedad: valor propiedad
    Los valores de las propiedades pueden ser de cualquier tipo incluyendo otros objetos
    cada una de las propiedades está separada por coma (,)
*/

var actividad = {
    nombre: "Sustancia tactil",
    materiales: "Glicerina, colorante, bicarbonato, palillos, agua y un recipiente de boca ancha",
    descripcion: "Mezclar todos los ingredientes en un recipiente y esperar unos minutos para esperar que la densidad....",
    autor: {
        nombre: "Mauricio",
        apellido: "Rivero",
        correo: "mauro@mrd2.co" 
    }
};

console.log("El nombre de la actividad es: "+actividad.nombre);
console.log("Los materiales de la actividad son: "+actividad.nombre);
console.log("El correo del autor de la actividad es: "+actividad.autor.correo);

//Tambien se puede visualizar por consola con la notación de corchetes
console.log("La descripción es: "+actividad["descripcion"]+" y el nombre del autor es: "+actividad["autor"]["nombre"]);