const todoInput = document.querySelector('#input-field') as HTMLInputElement
const todoButton = document.querySelector('#addTodo') as HTMLButtonElement
const todoList = document.querySelector('.todoList')!

todoButton.addEventListener('click', () => {
    let value = todoInput.value
    let li = document.createElement('li')
    let text = document.createTextNode(value)
    li.appendChild(text)
    todoList.appendChild(li)
    todoInput.value = null

})