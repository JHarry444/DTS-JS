const fetchTrainers = () => {
    fetch("http://localhost:8080/trainers")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

fetchTrainers();

const addTrainer = () => {
fetch("http://localhost:8080/trainers", {
    method: "post",
    body: JSON.stringify({name: 'PB'}),
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => {
    fetchTrainers();
}).catch(err => console.error(err))
}

addTrainer();