document.getElementById("el3").addEventListener("click", function() {
    console.log("DIV");
}, true);

document.getElementById("el4").addEventListener("click", function() {
    console.log("BUTTON");
});

document.getElementById("demo").addEventListener("input", function() {
    console.log(this.value);
});

document.getElementById("demo").removeEventListener("input", function() {
    console.log(this.value);
});



document.getElementById("demo").addEventListener("input", (event) => {
    console.log("EVENT:", event);
    console.log("TARGET:", event.target);
    console.log("VALUE:", event.target.value);
    
});