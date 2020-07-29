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

function createTodoComponent(content) {
    const todoItem = document.createElement('li');
    const contentItem = document.createTextNode(content);

    const excludeButton = document.createElement('button');
    const excludeButtonContent = document.createTextNode('x');

    excludeButton.style.marginLeft = '10px';
    excludeButton.appendChild(excludeButtonContent);

    const itemToRemove = todoList.indexOf(content);
    excludeButton.addEventListener('click', () => removeTodo(itemToRemove));

    todoItem.appendChild(contentItem);
    todoItem.appendChild(excludeButton);

    return todoItem
}

function renderTodos() {
    listElement.innerHTML = '';
    for (const item of todoList) {

        const todoComponent = createTodoComponent(item);
        listElement.appendChild(todoComponent);
    }
}

function removeTodo(item) {
    todoList.splice(item, 1);
    renderTodos();
}

formElement.addEventListener('submit', (e) => addTodo(e));
