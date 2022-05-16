const input = document.getElementById("input");
const list = document.getElementById("todos");
const form = document.getElementById("form");

const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

if (todosFromLocalStorage) {
    todosFromLocalStorage.forEach(el => addTodo(el));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});


function addTodo(savedTodo) {
    let todoText = input.value;
    let todoClass = "";

    if (savedTodo) {
        todoText = savedTodo.text;
        todoClass = savedTodo.completed ? "completed" : "";
    }

    if (todoText !== '') {

        // create li
        const todoEl = document.createElement('li');
        todoEl.className = `${todoClass}`;

        const todoSpan = document.createElement('span');
        todoSpan.className = "text";
        todoSpan.innerText = todoText;
        todoEl.appendChild(todoSpan);

        const checkSpan = `<span class="check fas fa-check-circle"></span>`;
        todoEl.innerHTML += checkSpan;

        const removeSpan = `<span class="delete fas fa-trash-alt"></span>`;
        todoEl.innerHTML += removeSpan;

        list.appendChild(todoEl);
        input.value = '';

        // get its delete/check
        const deleteBtn = todoEl.querySelector(".delete");
        const checkBtn = todoEl.querySelector(".check");

        // implement "completed"
        checkBtn.addEventListener("click", e => {
            e.target.parentElement.classList.toggle("completed");
            updateLocalStorage()
        });

        // implement "deleted"
        deleteBtn.addEventListener("click", e => {
            if (confirm("Do you really want to delete?")) {
                const li = e.target.parentElement;
                const ul = li.parentElement;
                if (li.classList.contains("completed")) {
                    ul.removeChild(li);
                }
                updateLocalStorage()
            }
        });

        updateLocalStorage();
    }
}

function updateLocalStorage() {
    // construct an array from todos li
    todoElements = document.querySelectorAll("li");
    const todosArr = [];

    Array.from(todoElements).map(el => {
        todosArr.push({
            text: el.innerText,
            completed: el.classList.contains("completed")
        })
    });

    localStorage.setItem('todos', JSON.stringify(todosArr));
}
