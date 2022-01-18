
const main = (()=>{

    /*
        Thanos snaps his fingers with the Infinity Gauntlet and this immediately 
        causes all Avengers’ power level to decrease by 1. 

        Write a function, using the Arrow function style, 
        that will receive an array and return all the avengers with 
        their updated power level. 

    */

    const avengersWithDecreasePowerLevel = (avengers)=>{

        const results =  avengers.map(avenger=>{

            return {
                ...avenger,
                powerLevel : avenger.powerLevel - 1
            }
        });

        return results;

    }

    /*
       Create a function, using the Arrow function style, 
       that will receive an array of Avengers and return all 
       the avengers whose names contain the letter o. 

    */
    const avengersNamesWithO = (avengers)=>{


        const results =  avengers.filter(avenger=>avenger.name.includes("o"));

        return results;


    }

    const Avenger = require("./Avenger.js");

    
    const av1 = new Avenger("Thor",4);
    const av2 = new Avenger("Black Widow",3); //An
    const av3 = new Avenger("Hawkeye",2);
   
    //Creating an array and intializing it with 3 avenger objects!
    const avengers = [av1,av2,av3];

    //Adding two Avengers after it was intialized!
    avengers.push(new Avenger("Storm",5));
    avengers.push(new Avenger("Iron Man",3));

    
    //Replace the Avenger (black widow) that is currently located at position 2 with Ant Man who has a  power level of 2
    avengers.splice(1,1,new Avenger("Ant Man",2));

    //Add the Avenger Monica Rambeau who has a power level of 5 to the start of the array.
    avengers.unshift(new Avenger("Monica Rambeau",5)) 

    //Call function to print out all the avengers that contain o
    console.log( avengersNamesWithO(avengers));


    console.log(avengersWithDecreasePowerLevel(avengers));
    
})();







