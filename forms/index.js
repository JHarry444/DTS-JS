document.getElementById("demoForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const data = {
        text: this.text.value,
        number: this.number.value,
        check: this.check.checked,
        radio: this.querySelector("input[type='radio']:checked")?.value || null
    };

    console.log("DATA:", data);
    
});

