// Select the element with the ID 'add_item'.
const addItemButton = document.getElementById('add_item');

// Select the <ul> element with the class 'my_list'.
const myList = document.querySelector('.my_list');

// Add a click event listener to the 'add_item' element.
addItemButton.addEventListener('click', function() {
  // Create a new <li> element.
  const newLi = document.createElement('li');
  
  // Set the text content of the new <li> element.
  newLi.textContent = 'Item';
  
  // Append the new <li> element to the <ul> element.
  myList.appendChild(newLi);
});
