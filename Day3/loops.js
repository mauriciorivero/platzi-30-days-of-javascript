/*
Loops are esential for automated task on code
The basic lop es the for 
for(inizialitation, condition, update){
    //code to run every iteration
}
*/
for (let i = 0; i <= 10 ; i++){
    console.log("This is the iteraion: "+i);
}

/*
There is also for in and for of. 
for in is used to navigate the properties of an object
for of is used to navigate the elements of an array
*/


//navigating an object
const activity = {
    id:1,
    name:"Naming animals",
    author:"mauro@mrd2.co"
}

for (const prop in activity) {
    console.log(activity[prop]);
}

//navigating an array
const authors = ["mauro@mrd2.co","teo@musar.com","mariaisa@musar.co","juanes@gmail.com"];

for (const author of authors) {
    console.log(author);
}

/*
While loop is a lopp that iterates indefinetely until the condition apply
while(condition){
    //code to run
    //update
}
*/

let it=0;
while(it<=10){
    console.log("The iterator is: "+it);
    it++;
}

/*
do while is a loop that exceutes 1 time at least
the condition is evaluated at the end of the instruction block
*/

//loops 10 times
let a = 1;
do {
	console.log(a);
	a++;
} while (a <= 10);

//loops only one time beacuse the condition is alrady filled, but anyways it executes
let b = 11;
do {
	console.log(b);
	b++;
} while (b <= 10);


/*
Draw a isoceles trinagle aling to the right using stars
 */

function drawTriangle(base, character){
    const drawing=[];
    for(let i=0;i<=base;i++ ){
        let spaces=" ".repeat(base-1);
        let characters=character.repeat(i);
        let shape = `${spaces}${characters}`;
        drawing.push(shape);
    }
    return drawing.join("\n");
}

console.log(drawTriangle(20,"*"));

//otra forma sin usar 
function drawTriangle2(base, character){
    let triangle = "";
    let characterNumber = 1;
    while(characterNumber <= base){
        for (let j = 0; j < base - characterNumber; j++) {
            triangle += " ";
        }
        for (let j = 0; j < characterNumber; j++) {
            triangle += character;
        }
        if (characterNumber < base) { 
            triangle += `\n` 
        };
        characterNumber++;
    }
  
  return triangle;
}

console.log(drawTriangle2(30, "*"));