const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', getJoke);

getJoke();

function getJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then(data => {
            jokeDiv.innerHTML = data.joke;
        });
} 

// Async/await alternative
/* async function getJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokeDiv.innerHTML = data.joke;

} */