// Open the containing folder in the terminal
// node --watch day-02.js
console.log("Hello SDEV-2150");

// Declaring variables
let answer;
const pi = 3.14159;

console.log(pi, answer)

answer = 42;
console.log(`answer is now ${answer} and it is a ${typeof answer}`);

console.log('5 + 2 = ', add(5, 2));

// hoisted functions
function add(a, b) {
    return a + b;
}


const multiply = function(a, b) {
    return a * b;
}

answer = multiply(5, 2);

// Arrow functions  
const subtract = (a, b) => a - b;
// create a variable subtract which will be assigned
// a function with parameters (a, b) that produces 
// the result of a - b
const subtractV2 = (a, b) => {
    return a - b;
}

// Let's work with arrays
const students = [
    { firstName: "Stewart", lastName: "Dent" },
    { firstName: "Annabelle", lastName: "Lyst" }
]

console.log(students);
console.table(students);

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

console.clear(); // clear the screen
for(let index = 0; index < daysOfTheWeek.length; index++) {
    console.log(daysOfTheWeek[index]);
}

for(value of daysOfTheWeek) {
    console.log(value);
}
for(index in daysOfTheWeek) {
    console.log(index);
}

console.clear();
console.log('Using Array Functions');
console.log('=====================');

answer = daysOfTheWeek.map(day => day.substring(0,3));
console.table(answer);

// Let's build our own function to loop through the elements in an array

const transform = function (callback) {
    // Our plan is to make this function
    // "belong" to our arrays
    // console.log(this)
    for(let index = 0; index < this.length; index++) {
        console.log(callback(this[index]));
    }
}

// Assign our function to our array object
daysOfTheWeek.transform = transform;

daysOfTheWeek.transform(firstThree);
//name of the funciton  \________/

function firstThree(text) {
    return text.substring(0,3);
}

console.log(); // blank line
