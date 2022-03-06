//=====================
//BUTTONS ETC
//=====================

//when the user presses enter, the new todo is added
let input = document.getElementById("new-todo");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    AddTodo();
    return;
  }
});

document.getElementById('toggle-all')
  .onclick = function () {
    MarkAllAsCompleted();
    CheckStuff();
    return;
  };

//calls remove-function when remove-completed button is pressed
document.getElementById('clear-completed')
  .onclick = function () {
    RemoveCompleted();
    //hides appropriate elements if necessary
    CheckStuff();
    return;
  };

document.getElementById('all')
  .onclick = function () {
    FilterAll();
    return;
  };

document.getElementById('active')
  .onclick = function () {
    FilterActive();
    return;
  };

document.getElementById('completed')
  .onclick = function () {
    FilterCompleted();
    return;
  };

//===================
//FUNCTIONS
//===================

function AddTodo() {
  //gets text from textbox
  let todo = document.getElementById('new-todo').value;

  //creates new list element
  let li = document.createElement('li');
  li.setAttribute('class', 'todo');

  //adds the completed-checkbox to the list element
  let checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'toggle-one');
  checkbox.setAttribute('type', 'checkbox');

  checkbox.onclick = function () {
    //hides appropriate elements if necessary
    CheckStuff();
    return;
  }

  li.appendChild(checkbox);

  //adds the text from the textbox to the list element
  let text = document.createElement('label');
  text.textContent = todo;

  li.appendChild(text);

  //creates the list elements destroy button
  let destroyButton = document.createElement('button');
  destroyButton.setAttribute('class', 'destroy');

  let destroyImage = document.createElement('img');
  destroyImage.src = 'destroy-image.png'
  destroyImage.alt = 'destroy';
  destroyButton.appendChild(destroyImage);

  //adds the function to the destroy button
  destroyButton.onclick = function () {
    destroyButton.closest('li').remove();
    //hides appropriate elements if necessary
    CheckStuff();
    return;
  };

  li.appendChild(destroyButton);

  //adds the list element to the list
  document.getElementById('todo-list').appendChild(li);

  //resets the textbox
  document.getElementById('new-todo').value = '';

  //hides appropriate elements if necessary
  CheckStuff();

}//method

function RemoveCompleted() {
  let node = document.getElementById('todo-list');

  //selects checked items to an array
  let checkedItems = node.querySelectorAll('.toggle-one:checked');

  //each item in the array is removed from the list
  for (item of checkedItems) {
    item.closest('li').remove();
  }

  //hides appropriate elements if necessary
  CheckStuff();
}//method

function CheckStuff() {
  CheckItemsLeft();
  ControlBoxHider();
  ClearCompletedHider();
}

function CheckItemsLeft() {
  let node = document.getElementById('todo-list');

  let list = node.querySelectorAll('li');
  let listCompleted = node.querySelectorAll('.toggle-one:checked');
  let itemsLeft;

  if (list.length - listCompleted.length === 1) {
    itemsLeft = '1 item left';
  }

  else {
    itemsLeft = list.length - listCompleted.length + ' items left';
  }

  document.querySelector("#todo-count").innerHTML = itemsLeft;

}

//if there's items in the list, the control-box is shown, otherwise it's hidden
function ControlBoxHider() {
  let list = document.querySelectorAll("#todo-list li");

  if (list.length === 0) {
    document.querySelector('.control-box-container').hidden = true;
  }

  if (list.length > 0) {
    document.querySelector('.control-box-container').hidden = false;
  }
}

//hides clear-completed button if there are no completed, shows it if there are
function ClearCompletedHider() {
  let node = document.getElementById('todo-list');

  let list = node.querySelectorAll('.toggle-one:checked');

  if (list.length > 0) {
    document.getElementById('clear-completed').hidden = false;
  }

  if (list.length === 0) {
    document.getElementById('clear-completed').hidden = true;
  }
}

function FilterAll() {
  let node = document.getElementById('todo-list');

  let list = document.querySelectorAll('li');

  for (item of list) {
    item.closest('li').hidden = false;
  }
}

function FilterActive() {
  FilterAll();

  let node = document.getElementById('todo-list');

  let list = document.querySelectorAll('.toggle-one:checked');

  for (item of list) {
    item.closest('li').hidden = true;
  }
}

function FilterCompleted() {
  FilterAll();

  let node = document.getElementById('todo-list');

  let list = document.querySelectorAll('.toggle-one:not(:checked)');

  for (item of list) {
    item.closest('li').hidden = true;
  }
}

function MarkAllAsCompleted() {
  let toggle = document.getElementById('toggle-all');
  let list = document.querySelectorAll('#todo-list li');

  if (toggle.checked === true) {
    for (item of list) {
      item.querySelector('.toggle-one').checked = true;
    }
  }

  if (toggle.checked === false) {
    for (item of list) {
      item.querySelector('.toggle-one').checked = false;
    }
  }
}//function
