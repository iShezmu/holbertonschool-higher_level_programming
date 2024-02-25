// Select the element with the ID 'update_header'
const updateHeaderButton = document.getElementById('update_header');

// Add a click event listener to the 'update_header' element.
updateHeaderButton.addEventListener('click', function() {
  // Select the header element and update its text content.
  document.querySelector('header').textContent = 'New Header!!!';
});
