let aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //whether it resolves or rejects is unknown
        (Math.random() < 0.5) ? resolve("resolved") : reject("rejected");
    }, Math.random() * 5_000); //function will return sometime: 0-5s
});



console.log("A");

aPromise
    .then(
        //resolved
        data => {
            console.log(data);
        })
    .catch(
        //rejected
        error => {
            console.error(error);
        }
    );

console.log("B");
    