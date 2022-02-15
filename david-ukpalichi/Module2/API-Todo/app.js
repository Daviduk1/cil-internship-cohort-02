const todoApi = document.querySelector('.todoApi')
const todoCta = document.querySelector('.btn')
// const todoInput = document.querySelector('#input-field')


let lastId = 201

todoCta.onclick = () => {
    loadDoc()
} 

function loadDoc() {
    let document = ""
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        const oldData = this.responseText
        const newData = JSON.parse(oldData);
        document += 
        `
        <table>
          <tr >
            <th>ID</th> 
            <th> USER ID</th> 
            <th> TITLE</th>
         </tr>
         `;
        newData.forEach( (data) => {
            document += 
            `<div>
                <tr>
                <td>${data.id}</td>
                <td>${data.userId}</td>
                <td>${data.title}</td>
                </tr>
                
            </div>
            `

        });
        document+= 
		'</table>';
        todoApi.innerHTML = document;

      }
    };

    xhttp.send();
}

const postTodo = () =>{
        let inputField= document.getElementById("input-field").value;
                   
	fetch('https://jsonplaceholder.typicode.com/todos/', {
		method: 'POST',
		body: JSON.stringify({
		title: inputField,
		userId: 11,
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
	  })
	  .then(response => response.json())
	  .then(json => {console.log(json);
        document.querySelector('#input-field').value = ""
        addNewTodo(json)
    })
}

const addNewTodo = (add) => {
    previousContent = document.querySelector("table").innerHTML;
    newContent = 
    `<tr>
    <td>${lastId}</td>
     <td>${add.userId}</td> 
     <td>${add.title}</td>
     </tr>`;
    document.querySelector("table").innerHTML = previousContent + newContent;
}

const inputValue = () => {

    newTodoInput = document.getElementById("input-field");
    document.querySelector(` td:nth-child(3)`).innerHTML = newTodoInput.value;
    document.getElementById("todoBtn").setAttribute("onclick", "postTodo()")

    fetch(`https://jsonplaceholder.typicode.com/todos/`, {
		method: 'PUT',
		body: JSON.stringify({
		title: inputField.value,
		id:newId,
		userId:newUserId,
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
	  })
	  .then(response => response.json())
	  .then(json => {console.log(json);

    })
    newTodoInput.value = ""
}