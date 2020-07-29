const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const formElement = document.querySelector('#app form');

const todoList = [];

function addTodo(e) {
    e.preventDefault();
    const inputValue = inputElement.value;

    if (inputValue) {
        todoList.push(inputValue);
        inputElement.value = '';
        renderTodos();
    }
};

function renderTodos() {
    listElement.innerHTML = '';
    for (const item of todoList) {
        const todoItem = document.createElement('li');
        const contentItem = document.createTextNode(item);

        const excludeButton = document.createElement('button');
        const excludeButtonContent = document.createTextNode('x');
        const itemToRemove = todoList.indexOf(item);

        excludeButton.addEventListener('click', () => removeTodo(itemToRemove));
        excludeButton.style.marginLeft = '10px';
        excludeButton.appendChild(excludeButtonContent);

        todoItem.appendChild(contentItem);
        todoItem.appendChild(excludeButton);

        listElement.appendChild(todoItem);
    }
}

function removeTodo(item) {
    todoList.splice(item, 1);
    renderTodos();
}

formElement.addEventListener('submit', (e) => addTodo(e));
