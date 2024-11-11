"use strict"; // enables modern ES standards

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}


console.log(capitalise("jordan"));

const capAnon = function(str) {
    console.log(this);
    
    return str.charAt(0).toUpperCase() + str.substring(1);
}

console.log(capAnon("joseph"));

const capArrow = str => {
    console.log(this);
    return str.charAt(0).toUpperCase() + str.substring(1);
}

console.log(capArrow("harrison"));


document.getElementById("anonForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("THIS:", this);
});

document.getElementById("arrowForm").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("THIS:", this);
});



function createGetter() {
    const name = "Jordan";

    return () => console.log(name);
    
}

const getter = createGetter();

getter();


const intro = (name = "JH") => `Hello, my name is ${name}`;

console.log(intro());

console.log(intro("Jordan"));

const varArgs = (...rest) => {
    return `Our names are: ${rest.join(", ")}`;
}


console.log(varArgs("Jordan", "Barry", "Harry"));
