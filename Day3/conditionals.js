//The basic control structure is the if block

var controlDummy1 = 5;

if(controlDummy1===5){
    console.log("The dummy control is 5");
}else{
    console.log("The dummy control is not 5");
}

function isLeapYear(year) {
    // Primero verificamos que el número sea positivo
    // Y además el número sea entero
    if(year % 1 != 0 || year <= 0){
      return false
    }
  
    // Verificamos que el año sea divisible entre 4
   // (la regla básica de los años bisiestos) 
    if(year % 4 === 0){
      // Si el numero es múltiplo de 100 y de 400 entonces es bisiesto
      if(year % 100 === 0 && year % 400 === 0){
        return true
      }
  
      // Si solo es multiplo de 100 no lo es
      if(year % 100 === 0){
        return false
      }
      // Si solo es múltiplo de 4, también lo es
      return true
    }
  
    // si no cumple con nada de lo anterior, no es bisiesto
    return false
  }

  console.log(isLeapYear(2000));

  
  function rateGame(gameName){
    switch (gameName){
        case "Horizon Zero Dawn":
            console.log("The best action combat sci-fi game ever!");
            break;
        case "God of War 2028":
            console.log("Norse as fuck");
            break;
        case "Zelda Breath of the Wild":
            console.log("Nintendo redefining the open world games");
            break;
        case "Star Fox 64":
            console.log("The best onrail shooter ever!");
            break;
        default:
            console.log("That game doesnt men anything to me");
            break;
      }
  }

  rateGame("Zelda Breath of the Wild");

  function getPetExcerciseInfo(type, age){
    switch(type){
        case "perros":
            if(age<1){
                return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
            }
            if(age>=1&&age<=7){
                return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
            }
            if(age>7){
                return "Los perros viejos necesitan caminatas más cortas";
            }
            break;
        case "gatos":
            if(age<1){
                return "Los gatitos necesitan frecuentes sesiones de juego";
            }
            if(age>=1&&age<=7){
                return "Los gatos a esta edad necesitan jugar diariamente";
            }
            if(age>7){
                return "Los gatos viejos necesitan sesiones de juego más cortas";
            }
            break;
        case "aves":
            if(age<1){
                return "Las aves jóvenes necesitan mucho espacio para volar";
            }
            if(age>=1&&age<=7){
                return "Las aves necesitan jugar diariamente y un lugar para volar";
            }
            if(age>7){
                return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
            }
            break;
    }
  }

  console.log(getPetExcerciseInfo("perros",3));