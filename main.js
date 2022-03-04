let input = document.getElementById("new-todo");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    AddTodo();
  }
});

let todoList = [];


function AddTodo() {
  let todo = document.getElementById('new-todo').value;

  let li = document.createElement('li');

  let checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'toggle-one');
  checkbox.setAttribute('id', 'toggle-one');
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

  destroyButton.appendChild(destroyImage);
  li.appendChild(destroyButton);

  todoList.push(li);

  for(todo of todoList)
  {
    document.getElementById('todo-list').appendChild(todo);
  }

  document.getElementById('new-todo').value='';

  document.querySelector('.control-box').hidden = false;



}//method
