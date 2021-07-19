// First javasscript program of the course
const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
 

// String
const myName = "Narciso Sbrissa Grimaldi";
console.log(myName);

const firstName = "Narciso";
const lastName = "Sbrissa Grimaldi";

const sentence = "Hello " + firstName + " " + lastName + "! How are you? (old fashion)";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you? (using template)`;

console.log(sentence);
console.log(sentenceWithTemplate);


// Boolean
const lightIsOn = true;

//Number
/*
whole number (1,2,10,500,1000)
floats (1.2, 3.14159)
*/

//Control Flow (if statment)
const skyIsBlue = true;

if (skyIsBlue) {
    console.log("The sky is blue!");
} else {
    console.log("The sky is not blue?");
}

//function
function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
console.log(addTwo(100))

//Scope
/*
function addFive(number){
    const someVariable = "you can not see me outsie this function";
    return number + 5;
}

addFive(10)
console.log(someVariable);
*/

let globalVar = "unchanged";

function addFive(number){
    globalVar = "changed";
    const someVariable = "you can not see me outsie this function";
    return number + 5;
}

console.log(globalVar); //"unchanged"
addFive(10);
console.log(globalVar); //why is "changed"?
console.log(someVariable);

//