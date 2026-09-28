/*    Lesson 1  - First Steps
  let js = 'amazing';
      if (js === 'amazing') alert('JavaScript is FUN!');
  console.log(40 + 8 + 23 - 11);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda'; //Declaring a variable

console.log(firstName); */

/*    Lesson 2 - Data Types 

let javascripIsFun;
let valueChange = false;
valueChange = 'YES'; //To change values you don't use 'let'

console.log(typeof true);
console.log(typeof javascripIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof valueChange);

 */

/*    Lesson 3 - let const and var 

let age = 30;  //Variable that can be mutate
age = 31;

const birthYear = 1991; //Variable that can not be mutate

var job = 'programmer'
job = 'teacher'
*/

/*    Lesson 4 - Basic Operators 

let currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSara = currentYear - 2018;

console.log(ageJonas, ageSara);  

console.log(ageJonas * 2, ageJonas / 10, 2 **3);
//2 ** 3 means 2 to the power of 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann'

console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

        Comparison operators
let currentYear = 2037;

const ageJonas = currentYear - 1991;
const ageSara = currentYear - 2018;

console.log(ageJonas > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(currentYear - 1991 > currentYear - 2018);

let x, y;
x = y = 25 -10 -5; // x = y = 10, start to the right-to-left
console.log(x ,y);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge);*/

/* --------------------Coding Challenge 1-------------------------- 

1. Store Mark's and John's mass and height in
variables
2. Calculate both their BMIs using the formula (you
can even implement both versions)
3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a
higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95; 
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark**2;
const BMIJohn = massJohn / heightJohn**2;
console.log(BMIMark, BMIJohn);

const markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);
*/

/*    Lesson 5 - Strings and Templates Literals

const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${+ (year - birthYear)} years old ${job}!`;
console.log(jonasNew);

console.log('String with \n\ multiple \n\ lines.');
console.log(`String with
  multiple
  lines`);  */

/*    Lesson 6 - If/Else

let age = 15;

if (age >= 18) {
  console.log('Sara can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2001;
let century;

if(birthYear <= 2000){
   century = 20;
} else{
   century = 21;
}

console.log(century);
 */

/* --------------------Coding Challenge 2-------------------------- 
Use the BMI example from Challenge #1, and the code
you already wrote, and improve it:

1. Print a nice output to the console, saying who has
the higher BMI. The message can be either "Mark's BMI
is higher than John's!" or "John's BMI is higher than
Mark's!"
2. Use a template string to include the BMI values in
the outputs. Example: "Mark's BMI (28.3) is higher
than John's (23.9) !"

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95; 

//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76; 

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`Mark's BMI (${BMIMark}) is not higher than John's (${BMIJohn})`);
}

*/

/*    Lesson 6 - Type Conversion and Coercion

//Type conversion - manually convert from one type to another
//Type coercion - Js does it automatically

//Tyoe Conversion
const inputYear = '1991';

console.log(inputYear + 18); //concatenate
console.log(Number(inputYear) + 18);//converts the string as a number and does the operation
console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' years old');//23 becomes a string
console.log('I am 23 years old');
console.log('23' - '10' - 3);
console.log('23' / '2');*/

/*    Lesson 7 - Truthy and Falsy Valeus */
