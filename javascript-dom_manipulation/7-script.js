// Fetch the list of movies from the API.
fetch('https://swapi-api.hbtn.io/api/films/?format=json')
  .then(response => response.json()) // Convert the response to JSON.
  .then(data => {
    // Get the ul element by its ID.
    const listMovies = document.getElementById('list_movies');

    // Iterate over each movie in the data.results array.
    data.results.forEach(movie => {
      // Create a new li element for each movie.
      const li = document.createElement('li');
      
      // Set the text content of the li element to the movie's title.
      li.textContent = movie.title;

      // Append the li element to the ul element.
      listMovies.appendChild(li);
    });
  })
  .catch(error => console.error('Error:', error)); // Log any errors to the console.
