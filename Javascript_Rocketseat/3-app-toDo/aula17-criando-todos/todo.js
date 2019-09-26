var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Array com carga inicial
var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
];

function renderTodos(){
    // Pega todo conteúdo dentro da listElement atual e substitui por '' excluindo todo o conteudo do array 'todos' para só depois inserir o novo conteudo;
    listElement.innerHTML = '';

    // Percorrer o array 'todos' a partir da variavel todo.
    for(todo of todos){

        // Criando novo elemento <li>
        todoElement = document.createElement('li');

        // Inserindo na variável 'todoText' todo o conteúdo presente no array 'todos' armazenado na variavel 'todo'.
        todoText = document.createTextNode(todo);

        //  Criando itens ('li') com o conteúdo dentro da Variável 'todoText'
        todoElement.appendChild(todoText);
        
        //  Criando lista ('ul') com todos os ('li') presentes em todoElement
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo(){

    // Recuperando o valor informado no input
    var todoText = inputElement.value;

    // Adicionando ao array 'todos' no final da fila (push) o conteudo informado via input armazenado na variavel 'todoText'.
    todos.push(todoText);

    // Apagando o conteúdo presente no input após adicioná-lo no array.
    inputElement.value = '';

    renderTodos();
}

// Adicionando evento de click ao botão chamando a função 'addTodo';
buttonElement.onclick = addTodo;