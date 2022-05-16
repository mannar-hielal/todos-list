const input = document.getElementById("input");
const list = document.getElementById("todos");
const form = document.getElementById("form");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});


function addTodo() {
    let todoText = input.value;
    if (todoText !== '') {

        // create li
        const todoEl = document.createElement('li');
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
        });

        // implement "deleted"
        deleteBtn.addEventListener("click", e => {
            console.log(e.target);
            const li = e.target.parentElement;
            const ul = li.parentElement;
            if (li.classList.contains("completed")) {
                ul.removeChild(li);
            }
        });
    }
}
