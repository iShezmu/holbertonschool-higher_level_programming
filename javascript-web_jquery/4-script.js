// Script that toggles the class when the uer clicks on tag.
$(document).ready(() => {
  // Find the <header> element
  const headerElement = $('header');

  // Toggles the 'red' and 'green' class to <header> element when user clicks on 'div#toggle_header' element
  $('DIV#toggle_header').click(() => {
    headerElement.toggleClass('red green');
  });
});
