const nums = [2, 4, 6, 8, 10];

for (let i = 0; i < nums.length; i++) {
    console.log("key:", i);
    console.log(`val: ${nums[i]}`);
}

for (let val of nums) { // prints out the values
    console.log("val:", val);
    
}

for (let key in nums) {
    console.log("key:", key); // prints out the keys
}


const me = { name: "Jordan"};

for (let key in me) {}

for (let key in me) {}

for (let key in me) {}

for (let key in me) {
    console.log("Key:", key, "Val:", me[key]);
}

// for (let val of me) {
//     console.log(val);
// }

let userInput = 2;

while (!userInput || userInput < 1 || userInput > 10) {
    userInput = parseFloat(prompt("Gimme a number from 1 - 10"));
}

do {
    // debugger;
    userInput = parseFloat(prompt("Gimme a number from 1 - 10"));
} while (!userInput || userInput < 1 || userInput > 10);

console.log("USER:", userInput);

function isTrue(v) {
    return !!v;
}

isTrue("Jordan");

isTrue(null);

isTrue("");

isTrue();

isTrue(0);

isTrue(NaN);

isTrue(false);
