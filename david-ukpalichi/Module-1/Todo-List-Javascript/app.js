const todoInput = document.querySelector('#todo-input')
const todoBtn = document.querySelector('#add-todo')
const todoLsit = document.querySelector('.todo-list')

// Adding list of todos
todoBtn.addEventListener('click', function() {
    if(todoInput.value == '') {
        alert('you have not entered anything')
    }

    else {
        todoLsit.innerHTML += 
        `
        <div class="list">
            <span id="listName">
                ${todoInput.value}
                </span>
                <button id="delete-btn">
                Delete
                </button>
        </div>
        `
        // clearing the input field after each entry
        todoInput.value = ''

        // Deleting  a list of todo
        var deleteBtn = document.querySelectorAll('#delete-btn')
        for(var i=0; i<deleteBtn.length; i++)
        deleteBtn[i].onclick = function() {
            this.parentNode.remove()
        } 

 }
    
})