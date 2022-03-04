let todoList = [];

//BUTTONS ETC

//when the user presses enter, the new todo is added
let input = document.getElementById("new-todo");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    AddTodo();
  }
});

//calls remove-function when remove-completed button is pressed
document.getElementById('clear-completed')
  .onclick = function() { RemoveCompleted(); };

//FUNCTIONS

function AddTodo() {
  let todo = document.getElementById('new-todo').value;

  let li = document.createElement('li');

  let checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'toggle-one');
  checkbox.setAttribute('type', 'checkbox');

  li.appendChild(checkbox);

  let text = document.createElement('label');
  text.textContent = todo;

  li.appendChild(text);

  let destroyButton = document.createElement('button');
  destroyButton.setAttribute('class', 'destroy');

  let destroyImage = document.createElement('img');
  destroyImage.src = 'destroy-image.png'
  destroyImage.alt = 'X';

  destroyButton.onclick = function(){
    destroyButton.closest('li').remove()
    return;
  };

  destroyButton.appendChild(destroyImage);
  li.appendChild(destroyButton);

  document.getElementById('todo-list').appendChild(li);

  document.getElementById('new-todo').value='';

  document.querySelector('.control-box').hidden = false;

  //todo-count

}//method

function RemoveCompleted(){
  let node = document.getElementById('todo-list');

  let checkedItems = node.querySelectorAll('.toggle-one:checked');

  for(item of checkedItems){
    item.closest('li').remove();
  }
}//method
