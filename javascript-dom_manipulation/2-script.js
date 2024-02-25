// Select the element with the ID 'red_header'.
const redHeaderButton = document.getElementById('red_header');

// Add a click event listener to the selected element.
redHeaderButton.addEventListener('click', function() {
  // When the element is clicked, select the header element and add the 'red' class to it.
  document.querySelector('header').classList.add('red');
});
