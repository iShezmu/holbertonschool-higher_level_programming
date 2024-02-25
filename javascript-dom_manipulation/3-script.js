// Select the toogle button by its ID
const toggleButton = document.getElementById('toggle_header');

// Add a click event listener to the toggle button.
toggleButton.addEventListener('click', function() {
  // Select the header element.
  const header = document.querySelector('header');

  // Check if the header currently has the class 'red'.
  if (header.classList.contains('red')) {
    // If so, remove 'red' and add 'green'.
    header.classList.remove('red');
    header.classList.add('green');
  } else {
    // Otherwise, remove 'green' and add 'red'.
    header.classList.remove('green');
    header.classList.add('red');
  }
});
