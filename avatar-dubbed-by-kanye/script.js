function fetchStuff() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => {
            document.querySelector('span').innerText = data.quote;
        })
        .catch(err => console.error(err))


    fetch('https://last-airbender-api.fly.dev/api/v1/characters/random')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data[0].photoUrl;
        })
}

fetchStuff();
