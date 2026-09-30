/*                  Fundamentals 2 */
/*      Lesson 1 - Strict mode 
'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive");

 const interface = 'Audio';
const private = 534; */

/*      Lesson 2 - Functions 

function logger(){
    console.log("My name is Sara");
}
//logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/*      Lesson 3 - Functions Declarations vs Expressions*/
   
function calcAge1 (birthYear){
    return 2026 - birthYear;
}

const age1 = calcAge1(2005);
console.log(age1);


