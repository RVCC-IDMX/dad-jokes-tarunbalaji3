const getRandomDadJoke = async () => {
  // const url = 'https://icanhazdadjoke.com/';
  // const jokeStream = await fetch(url, {
  //   headers: {
  //     Accept: 'application/json',
  //   },
  // });
  const url = '/.netlify/functions/jokes';
  // eslint-disable-next-line no-undef
  const jokeStream = await fetch(url);
  const jsonJoke = await jokeStream.json();
  // eslint-disable-next-line prefer-destructuring
  const joke = jsonJoke.joke;
  return joke;
};

const displayJoke = (joke) => {
  // eslint-disable-next-line no-undef
  const h1 = document.querySelector('h1');
  h1.textContent = joke;
};

const refreshJoke = async () => {
  const joke = await getRandomDadJoke();
  displayJoke(joke);
};

refreshJoke();

setInterval(refreshJoke, 3000);
