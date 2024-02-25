// URL from which to fetch the character data
const url = 'https://swapi-api.hbtn.io/api/people/5/?format=json';

// Use the Fetch API to retrieve data from the URL
fetch(url)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Extract the character name from the data object
    const characterName = data.name;
    
    // Select the HTML element with the ID 'character'
    const characterElement = document.getElementById('character');
    
    // Set the text content of the selected element to the character name
    characterElement.textContent = characterName;
  })
  .catch(error => console.error('Fetch error:', error)); // Log any errors to the console
