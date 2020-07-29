const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const formElement = document.querySelector('#app form');

const todoList = [];

function addTodo(e) {
    e.preventDefault();
    const inputValue = inputElement.value;

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

    const excludeButton = document.createElement('button');
    const excludeButtonContent = document.createTextNode('x');

    // excludeButton.setAttribute('onclick', `removeTodo${pos}`);

    excludeButton.style.marginLeft = '10px';
    excludeButton.appendChild(excludeButtonContent);

    todoItem.appendChild(contentItem);
    todoItem.appendChild(excludeButton);

    return todoItem;
}

function renderTodos() {
    for (const item of todoList) {

        listElement.appendChild(item);
    };
};

function removeTodo(item) {
    todoList.splice(item, 1);
    renderTodos();
}

formElement.addEventListener('submit', (e) => addTodo(e));
