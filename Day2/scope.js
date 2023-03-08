//A global variable
var numberGlobal = 1;

function sumLocal(){
    let numberLocal=5; //A local variable
    return numberGlobal+numberLocal;
}

function sumGlobal(){
    var numberGlobal2=4;
    return numberGlobal2;
}

console.log(sumLocal());
console.log("This is a reading from the direct variable inside sumGlobal function: "+sumGlobal().numberGlobal2);
console.log("this is a reading from the return of the sumGlobal function: "+sumGlobal());//undefined because the declaration is elevated but not initialized