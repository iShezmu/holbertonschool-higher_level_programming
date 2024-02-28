// Script that adds a element
$(document).ready(() => {
  // Find the <ul> with class "my_list"
  const unorderList = $('UL.my_list');

  // Adds new list item element to 'unorderList' when user clicks on 'div#add_item' element
  $('DIV#add_item').click(() => {
    const listItem = '<li>Item</li>';
    unorderList.append(listItem);
  });
});
