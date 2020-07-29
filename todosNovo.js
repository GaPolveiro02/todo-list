const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const formElement = document.querySelector('#app form');

const todoList = [];

function addTodo(e) {
    e.preventDefault();
    let inputValue = inputElement.value;
    const todoItem = document.createElement('li');
    const contentItem = document.createTextNode(inputValue);
    todoItem.appendChild(contentItem);

    todoList.push(todoItem);
    inputElement.value = '';
    console.log(todoList);
    renderTodos();
};

function renderTodos() {
    console.log('passei aqui');
    for (const item of todoList) {
        listElement.appendChild(item);
    };
};

formElement.addEventListener('submit', (e) => addTodo(e));
