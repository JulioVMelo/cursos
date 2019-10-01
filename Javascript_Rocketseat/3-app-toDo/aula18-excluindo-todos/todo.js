var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//  Array com carga inicial
const todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
];

function renderTodos(){
    //  Pega todo conteúdo dentro da listElement atual e substitui por '' excluindo todo o conteudo do array 'todos' para só depois inserir o novo conteudo;
    listElement.innerHTML = '';

    //  Percorrer o array 'todos' a partir da variavel todo.
    for(todo of todos){

        //  Criando novo elemento <li>
        todoElement = document.createElement('li');

        //  Inserindo na variável 'todoText' todo o conteúdo presente no array 'todos' armazenado na variavel 'todo'.
        todoText = document.createTextNode(todo);



        
        //  Criando elemento de link <a>
        const linkElement = document.createElement('a');
            //  Setando atributo 'href' ao elemento <a>
            linkElement.setAttribute('href','#');
        
        //  Criando texto do elemento <a>
        const linkText = document.createTextNode('Excluir');
            //  Inserindo texto clicável 'linkText' ao item <a> 'linkElement'
            linkElement.appendChild(linkText);


        // Retornar a posição no array 'todos' onde o texto seja igual (indexOf) ao item individual presente na variável 'todo'
        const posicao = todos.indexOf(todo);
        // Criando atributo onclick no <a> chamando a funcao 'deleteTodo' passando o indice do item no array via variável 'posicao'.
        linkElement.setAttribute('onclick', 'deleteTodo('+ posicao +')');


        
        //  Criando itens ('li') com o conteúdo dentro da Variável 'todoText'
        todoElement.appendChild(todoText);
        //  Inserindo conteudo de 'linkElement' ao <li> de 'todoElement'
        todoElement.appendChild(linkElement);
        
        //  Criando lista ('ul') com todos os ('li') presentes em todoElement
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo(){

    //  Recuperando o valor informado no input
    const todoText = inputElement.value;

    //  Adicionando ao array 'todos' no final da fila (push) o conteudo informado via input armazenado na variavel 'todoText'.
    todos.push(todoText);

    //  Apagando o conteúdo presente no input após adicioná-lo no array.
    inputElement.value = '';

    renderTodos();
}

//  Adicionando evento de click ao botão chamando a função 'addTodo';
buttonElement.onclick = addTodo;


function deleteTodo(posicao){

    todos.splice(posicao, 1);

    renderTodos();
}
