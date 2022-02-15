var todoInput = document.querySelector('#input-field');
var todoButton = document.querySelector('#addTodo');
var todoList = document.querySelector('.todoList');
todoButton.addEventListener('click', function () {
    var value = todoInput.value;
    var li = document.createElement('li');
    var text = document.createTextNode(value);
    li.appendChild(text);
    todoList.appendChild(li);
});
