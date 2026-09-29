          /* Fundamentals 1 */

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

/* -----Coding Challenge 1----- 

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

/* -----Coding Challenge 2----- 
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

/*    Lesson 7 - Type Conversion and Coercion

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

/*    Lesson 8 - Truthy and Falsy Values 

// falsy values: 0, '', undefined, null, NaN. Will be converted to FALSE

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));


let money = 0; //if-else works only in boolean values, js will coerce the value of the number

if(money){
  console.log("Don't spend it all");
} else{
  console.log("You should get a job");
}
  */

/*    Lesson 9 - Equality Operators: == VS. === 

//== loose equality: perform a type coercion when comparing two values
//=== strict equality: will not perform the coercion when comparing values

const a = 100;
const b = '100';
console.log(a == b);
console.log(a === b);
*/

/*    Lesson 10 - Boolean Logic  
//Basic Booleand Operators: AND, OR and NOT Operators
//AND &&, OR ||, NOT !

const hasDriversLicense = true //A
const hasGoodVision = true //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
// console.log("Sara is able to drive!");
//} else {
//  console.log("Someone else shoud drive...");
//} 

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sara is able to drive!");
} else {
  console.log("Someone else shoud drive...");
}
*/

/* -----Coding Challenge 3-----   
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinAverage = (96 + 108 + 89)/3;
const koalasAverage = (88 + 91 + 110)/3;
console.log(dolphinAverage, koalasAverage)

if(dolphinAverage > koalasAverage){
  console.log(`Dolphins win the trohy with a score of ${dolphinAverage}`)
} else if(koalasAverage > dolphinAverage){
  console.log(`Koalas win the trohy with a score of ${koalasAverage}`)
} else if(koalasAverage ===dolphinAverage){
  console.log("Both win the trothy")
} 

  //BONUS 1  
const dolphinAverage = (97 + 112 + 101)/3;
const koalasAverage = (109 + 95 + 112)/3;
console.log(dolphinAverage, koalasAverage)

if(dolphinAverage > koalasAverage && dolphinAverage >= 100){
  console.log(`Dolphins win the trohy with a score of ${dolphinAverage}`)
} else if(koalasAverage > dolphinAverage && koalasAverage >= 100){
  console.log(`Koalas win the trohy with a score of ${koalasAverage}`)
} else if(koalasAverage===dolphinAverage){
  console.log("Both win the trothy")
} 

//BONUS 2
 const dolphinAverage = (97 + 112 + 101)/3;
const koalasAverage = (109 + 95 + 106)/3;
console.log(dolphinAverage, koalasAverage)

if(dolphinAverage > koalasAverage && dolphinAverage >= 100){
  console.log(`Dolphins win the trohy with a score of ${dolphinAverage}`)
} else if(koalasAverage > dolphinAverage && koalasAverage >= 100){
  console.log(`Koalas win the trohy with a score of ${koalasAverage}`)
} else if(koalasAverage===dolphinAverage && koalasAverage >= 100 && dolphinAverage >= 100){
  console.log("Both win the trothy")
}  */

/*    Lesson 11 - Switch Statement

//Simply terms, it compares one value to multiple different options

const day = 'monday'

switch(day){
  case 'monday':
    console.log("Plan couse structure");
    console.log("Go to coding meetup");
    break;

  case 'tuesday':
    console.log("Prepare theory videos");
    break;

  case 'wednesday':
  case 'thursday':
    console.log("Code examples");
    break
    
  case 'friday':
    console.log("Record videos")
    break;
  
  case 'saturday':
  case 'sunday':
    console.log("Enjoy the weekend");

  default:
    console.log("Not a valid day!")
}*/

/*    Lesson 12 - Statements and Expressions
//Expression: piece of code that produces a value. Ex: 3+4; true && false; 1991.

//Statments: bigger piece of code and does not produce values. Ex: if-else, switch. 
*/

/*    Lesson 13 - Conditional Operator (ternary)

const age = 23;
//age >= 18 ? console.log("I like to dring wine") : console.log("I like to drink water") 
// //After the '?' is where your statment of the 'if' will go (?=if), after the ':' is where your 'else' will go (:=else).

const drink = age >= 18  ? "wine" : "water";
console.log(drink);

let drink2;
if (age >=18){
  drink2 = 'wine';
} else{
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18  ? "wine" : "water"}`);
*/

/* -----Coding Challenge 4-----
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

const bill = 300;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

console.log(`The bill was ${bill}, the tip was ${tip}, the total value is ${bill + tip}`)
*/


