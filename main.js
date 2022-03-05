let input = document.getElementById("new-todo");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    AddTodo();
  }
});

let todolist = [];


function AddTodo() {
  let todo = document.getElementById('new-todo').value;

  let li = document.createElement('li');
  li.setAttribute('id', todo);

  let checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'toggle-one');
  checkbox.setAttribute('id', 'toggle-one');
  checkbox.setAttribute('type', 'checkbox');

  li.appendChild(checkbox);

  let text = document.createElement('label');
  text.textContent = todo;

  li.appendChild(text);

  todolist.push(text);


  document.getElementById('counter').textContent = todolist.length;


  let destroyButton = document.createElement('button');
  destroyButton.setAttribute('class', 'destroy');

  let destroyImage = document.createElement('img');
  destroyImage.src = 'destroy-image.png'
  destroyImage.alt = 'X';
  destroyButton.onclick = () => {

    let temp = document.getElementById(todo);
    console.log(temp)
    console.log('clicked')
    console.log(todo);
    temp.remove();
    var index = todolist.indexOf(todo);
    if (index !== -1) {
      todolist.splice(index, 1);
      document.getElementById('counter').textContent = todolist.length;
    }
    console.log(todolist);
  }

  destroyButton.appendChild(destroyImage);
  li.appendChild(destroyButton);

  document.getElementById('todo-list').appendChild(li);

  document.getElementById('new-todo').value = '';

  //visa control-box
  document.querySelector('.control-box').hidden = false;





}//method




