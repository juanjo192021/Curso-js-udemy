import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));
//todoList.todos.forEach(crearTodoHtml);

/* localStorage.setItem('mi-pinga', 'ABCDE');
setTimeout(() =>{
    
    localStorage.removeItem('mi-pinga');
}, 1500); */
console.log( 'Arreglo de objetos' , todoList.todos);