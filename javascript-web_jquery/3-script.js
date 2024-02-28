// Script that adds a class when user clicks on tag
$(document).ready(() => {
  // Find the <header> element
  const headerElement = $('header');

  // Adds the 'red' class to <header> element when user clicks on 'div#red_header' element
  $('DIV#red_header').click(() => {
    headerElement.addClass('red');
  });
});
