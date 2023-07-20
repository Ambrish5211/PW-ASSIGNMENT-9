
const addTodo = () => {

const input = document.querySelector('.js-input');

const todo = document.createElement('p')
todo.textContent = input.value;
const container = document.querySelector('.container')
container.appendChild(todo);
input.value = '';

}