window.onload = function() {
  var your_name = prompt("What is your name?"),
      button,
      thing_list;

  document.getElementById('name').innerHTML = your_name;

  thing_list = document.getElementById('fav-list');

  button = document.getElementById('new-thing-button');
  button.onclick = function(event) {
    event.preventDefault();
    MyApp.add_to_list(thing_list);
    return false;
  };
};

// We can define things outside of the window.onload which are evaluated
// only when called.
MyApp = {};

MyApp.add_to_list = function(list) {
  var new_li = document.createElement('li'),
      new_item_text = document.getElementById('new-thing');
  new_li.innerHTML = new_item_text.value;
  new_item_text.value = "";
  if (new_li.innerHTML !== "") {
    list.appendChild(new_li);
  }
  return true;
}
