const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

const todoList = [];

function addTodo() {
    const todoItem = document.createElement('li');
    const contentItem = document.createTextNode('da o bumbum');
    todoItem.appendChild(contentItem);

    todoList.push(todoItem);
    console.log(todoList);
    renderTodos();
};

function renderTodos() {
    console.log('passei aqui');
    for (const item of todoList) {
        listElement.appendChild(item);
    };
};

addTodo();