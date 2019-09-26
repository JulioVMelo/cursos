var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
];

function renderTodos(){
    for(todo of todos){
        todoElement = document.createElement('li');
        todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();