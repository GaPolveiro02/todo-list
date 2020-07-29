const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const formElement = document.querySelector('#app form');

const todoList = [];

function addTodo(e) {
    e.preventDefault();
    let inputValue = inputElement.value;

    if (inputValue) {
        const a = createTodo(inputValue);

        todoList.push(a);
        inputElement.value = '';
        renderTodos();
    }
};

function createTodo(content) {
    const todoItem = document.createElement('li');
    const contentItem = document.createTextNode(content);
    todoItem.appendChild(contentItem);

    return todoItem;
}

function renderTodos() {
    for (const item of todoList) {
        listElement.appendChild(item);
    };
};

formElement.addEventListener('submit', (e) => addTodo(e));
