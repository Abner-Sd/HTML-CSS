/*                  Fundamentals 2 */
'use strict';
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

/*      Lesson 3 - Functions Declarations vs Expressions
 
//Function declaration
function calcAge1(birthYear) {
    return 2026 - birthYear;
    }
    
    const age1 = calcAge1(2005);
    console.log(age1);
    
    //Function expression
    const calcAge2 = function (birthYear) {
        return 2026 - birthYear;
        }
        
        const age2 = calcAge2(2005)
        console.log(age1, age2);*/

/*      Lesson 4 - Arrow Functions 
 
//Function Expression
const calcAge2 = function (birthYear) {
    return 2026 - birthYear;
    }
    
    const age2 = calcAge2(2005);
    console.log(age2);
    
    //Arrow Function
    //The 'returns' is after the arrow
    const calAge3 = birthYear => 2026 - birthYear;
    const age3 = calAge3(2005);
    console.log(age3);
    
    const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2037 - birthYear;
        const retirement = 65 - age; //Retirement age is 65
        //return retirement;
        return `${firstName} retires in ${retirement} years`;
        }
        
        console.log(yearsUntilRetirement(2005, 'Abner'));
        console.log(yearsUntilRetirement(1991, 'Jonas'));*/

/*      Lesson 5 - Functions calling other functions
 
function cutFruitPieces(fruit){
    return fruit * 4;
    }
    
    function fruitProcessor(apples, oranges){
        const applePieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);
        
        const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
        return juice;
        }
        
        console.log(fruitProcessor(2, 3));
        */

/*      Lesson 6 - Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age; //Retirement age is 65

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(2005, 'Abner'));
console.log(yearsUntilRetirement(1970, 'Mike'));*/

/* ---------Coding Challenge 1-------------- 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉


//Calculate the average
const calcAverage = (a, b, c) => (a + b + c) / 3;
//Test 1
//const scoreDolphins = calcAverage(44, 23, 71);
//const scoreKoalas = calcAverage(65, 54, 49);

//Test 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

//Check to see wich team won
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Kolas win (${avgKoalas} vs ${avgDolphins})`);
    } else{
        console.log("No team wins...")
    }
}
checkWinner(scoreDolphins, scoreKoalas);*/

/*      Lesson 7 - Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);
//console.log(years);

console.log(friends[0]);//Michael - first
console.log(friends[2]);//Peter - last

console.log(friends.length);//Numbers of elements in a array
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];

console.log(jonas);

//Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);*/

/*      Lesson 8 - Basic Array operation (methods)
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); //Adds elements to the end of the array
console.log(friends);
friends.unshift('John');
console.log(friends); //Adds elements to the beggining of the array

//Remove elements
const popped = friends.pop();//remove the last element of the array
console.log(popped);
console.log(friends);

friends.shift(); //remove the first element from the array
console.log(friends);

//Array positions
console.log(friends.indexOf('Steven')); //Shows in witch position the element is
console.log(friends.indexOf('Bob'));

//Show if the element is in the array. It's a boolean value and it's a strict type of cheking.
friends.push(23)
console.log(friends.includes('Steven'))//true
console.log(friends.includes('Bob'));//false
console.log(friends.includes('23'));//false
console.log(friends.includes(23));//true


if(friends.includes('Steven')){
    console.log("You have a friend called Steven");
}*/

/* ---------Coding Challenge 2-------------- 
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 

 //const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
 
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); 

 const calcTip = console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); 
 if(bill <=300 && bill >=50){
    let tip = bill * 0.15;
} else{
    let tip = bill * 0.2;
}  

const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 444];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2] ]

console.log(bills, tips);
console.log(totals);*/

/*      Lesson 8 - Introduction to Objects 

const jonasArray = [
    'Jonas',
    'Schemedtamn',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',  //This is a key, first value name
    lastName: 'Schedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
    //Each key is called a 'properties'
}
    console.log(jonas);
    */

/*      Lesson 9 - Dot vs Bracket Notation

//How to retrieve and change datas on objects
const jonas = {
    firstName: 'Jonas',  //This is a key, first value name
    lastName: 'Schedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
}
console.log(jonas);

//Getting a property from a object-----
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//const interestedIn = prompt('What do you wnat to know about Jonas? Choose between firstName, lastName, age, job and friends');


 if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else{
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}
 
//Adding properties to a object

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';

console.log(jonas);

//Challenge
//"'Jonas' has '3' friends, and his best friend is called 'Michael'"
console.log(`${jonas.firstName}, has ${jonas.friends.length} friends, his best friends is called ${jonas.friends[0]} `)*/

/*      Lesson 10 - Object Methods 

const jonas = {
    firstName: 'Jonas',  //This is a key, first value name
    lastName: 'Schedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

     //calcAge: function(birthYear){
         return 2037 - birthYear;
     }, 

     calcAge: function(){
         console.log(this);
         return 2037 - this.birthYear;
     },

     //calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
 
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }

}

console.log(jonas.calcAge);
console.log(jonas.age);


//Challenge --------------------
//"Jonas is a 46 year old teacher and he has a drivers license"
console.log(jonas.getSummary());
*/

/* ---------Coding Challenge 3-------------- 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi

    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi)
console.log(john.bmi)

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}"s BMI (${mark.bmi}) is higher than ${john.fullName}"s BMI (${mark.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}"s BMI (${john.bmi}) is higher than ${mark.fullName}"s BMI (${mark.bmi})`)
}*/

/*      Lesson 11 - Iretation: the FOR loop

console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');


for(let rep = 1;rep <= 5; rep++){
    console.log(`Lifiting weights repeetition ${rep}`);
}
 */

/*      Lesson 12 - Looping arrays - Breaking and Continuing 

const jonas = [
    'Jonas',
    'Schemedtamn',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

const types = [];

 for(let i = 0; i < jonas.length ; i++){
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]); 
 }

console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);

//Continue and break

//Continue = acces the current iteration and continues, skipping past some iteration
//Break = terminates the loop

const jonas = [
    'Jonas',
    'Schemedtamn',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

console.log('--- ONLY STRINGS ---')
for(let i = 0; i < jonas.length ; i++){
if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
 }

//After number is found, nothing should be printed
console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < jonas.length ; i++){
if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
 }
*/

/*     Lesson 13 - Looping backwards and loops in loops  */

const jonas = [
    'Jonas',
    'Schemedtamn',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i --){
    console.log(jonas[i]);

} 