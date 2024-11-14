const fetchTrainers = () => {
    fetch("http://localhost:8080/trainers")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

fetchTrainers();

const addTrainer = async () => {
    try {
        const res = await fetch("http://localhost:8080/trainers", {
            method: "post",
            body: JSON.stringify({ name: 'PB' }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.status != 201) {

        }
        const res2 = await fetch("http://localhost:8080/trainers")
        const json = res2.json();
        console.log(json);
    } catch (err) {
        console.error(err);
        
    }
}

addTrainer();