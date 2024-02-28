// Script that fetches from an URL and displays the value
$(document).ready(() => {
  // Find the 'DIV#hello' element
  const hello = $('DIV#hello');
  const url = 'https://hellosalut.stefanbohacek.dev/?lang=fr';

  // Fetch the data from the API
  $.get(url, (data) => {
    hello.text(data.hello);
  });
});
