const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Function to generate a random joke
// Using async/await to fetch the joke
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  // Fetch a random joke from the API
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

// Using Promises to fetch the joke

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   // Fetch a random joke from the API
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       // Display the joke in the joke element
//       jokeEl.innerHTML = data.joke;
//     });
// }

generateJoke();

// Add an event listener to the button to generate a new joke when clicked
jokeBtn.addEventListener("click", generateJoke);
