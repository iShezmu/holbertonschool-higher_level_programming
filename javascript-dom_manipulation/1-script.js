// Select the element with the ID 'red_header'.
const redHeader = document.getElementById('red_header');

// Add a click event listener to the selected element.
redHeader.addEventListener('click', function() {
  // When the element is clicked, select the header element and change its color to red.
  document.querySelector('header').style.color = '#FF0000';
});
