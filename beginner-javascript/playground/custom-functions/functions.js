// Normal function call
function doctorize(firstName) {
    return `Dr. ${firstName}`;
}

// Anonymous function
/* function (firstName){
    return `Dr. ${firstName}`;
} */

// Expression function
const doctor = function (firstName) {
    return `Dr. ${firstName}`;
};

// Arrow function
const toInches = (inches) => inches * 2.54;

// Arrow functions with brackets
const addToNum = (a, b) => a + b;

// Function for creating Objects
function makeBaby(first, last) {
    const baby = {
        name: first + last,
        age: 0,
    };
    return baby;
}

// Arrow function for returning Object

const myBaby = (first, last) => ({ name: first + last, age: 0 });

// IIFE - Immediately Invoked Function Expression

(function (age) {
    console.log('Hi There in IIFE');
    return `My age is ${age}`;
})(10);

// Methods

const register = {
    name: 'Muthu',
    age: 30,
    // Function
    sayHi() {
        return 'Hello, how are you..?';
    },
    // Arrow function
    greetings: () => 'Hello, how are you from Arrow function',
};
