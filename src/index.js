// console.log("Hello from src/index.js!");

// const button = document.querySelector('#home-btn');
const button = document.getElementById('home-btn');

// addEventListener(EVENT_TYPE, CALLBACK)
// set up the 'microphon' - listening for event_type
// waiting...
// callback(event)

if (button) {
  button.addEventListener('click', (event) => {
    const element = event.currentTarget;
    element.innerText = 'Please hold...'
    // element.disabled = true
    element.setAttribute('disabled', '');
  });
}

// querySelector -> is like Ruby's #find => Object/El
// querySelectorAll -> is like Ruby's #select => Array

// const list = document.querySelectorAll('#my-list');
const moviesList = document.getElementById('movies');
const apiURL = "http://www.omdbapi.com/?apikey=8459edfe"

const renderMovie = (movie) => {
  return `<li class="list-inline-item">
            <img src="${movie.Poster}" alt="">
            <p>${movie.Title}</p>
          </li>`
};

// GET Request: fetch(URL)
// fetch(apiURL)
//   .then(response => response.json())
//   .then(data => {
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       const movieHTML = renderMovie(movie);
//       // insertAdjacentHTML(POSITION, HTML_STRING)
//       moviesList.insertAdjacentHTML('beforeend', movieHTML);
//     });
//   });

const searchMovies = (query) => {
  fetch(`${apiURL}&s=${query}`)
    .then(response => response.json())
    .then((data) => {
      const movies = data.Search;
      movies.forEach((movie) => {
        const movieHTML = renderMovie(movie);
        // insertAdjacentHTML(POSITION, HTML_STRING)
        moviesList.insertAdjacentHTML('beforeend', movieHTML);
      });
    });
};

const form = document.getElementById('search-movies');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('keyword');
  const query = input.value;
  moviesList.innerHTML = '';
  searchMovies(query);
});
























