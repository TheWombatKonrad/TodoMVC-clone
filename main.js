let input = document.getElementById("new-todo");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        AddTodo();
    }
});

function AddTodo() {
  let todo = document.getElementById('new-todo').value;

  let li = document.createElement('li');

  let checkbox = document.createElement('input');
  checkbox.setAttribute('class', 'toggle-one');
  checkbox.setAttribute('id', 'toggle-one');
  checkbox.setAttribute('type', 'checkbox');

  li.appendChild(checkbox);

  let text = document.createElement('p');
  text.textContent = todo;

  li.appendChild(text);

  document.getElementById('todo-list').appendChild(li);

}
