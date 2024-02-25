// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Use the Fetch API to retrieve the translation of "hello"
    fetch('https://hellosalut.stefanbohacek.dev/?lang=fr')
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            // Select the element with the ID 'hello'
            const helloElement = document.getElementById('hello');
            // Update the text content of the selected element with the "hello" value
            helloElement.textContent = data.hello;
        })
        .catch(error => console.error('Error:', error)); // Log errors, if any
});
