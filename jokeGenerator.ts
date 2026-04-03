import axios from 'axios';

const jokeAPI = 'https://official-joke-api.appspot.com/random_joke';

async function fetchJoke() {
    try {
        const response = await axios.get(jokeAPI);
        const joke = response.data;
        return `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        console.error('Error fetching joke:', error);
        return 'No jokes available at the moment.';
    }
}

// Example usage:
fetchJoke().then((joke) => console.log(joke));