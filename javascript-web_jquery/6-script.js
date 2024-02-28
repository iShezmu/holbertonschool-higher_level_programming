// Script that updates the text of an element
$(document).ready(() => {
  // Find the <header> element
  const headerElement = $('header');

  // Updates the text of the <header> element to 'New Header!!!'
  $('DIV#update_header').click(() => {
    headerElement.text('New Header!!!');
  });
});
