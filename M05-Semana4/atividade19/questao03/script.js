/*3. Lista de tarefas interativa:
Você foi contratado para criar uma aplicação web de lista de tarefas para ajudar os usuários a gerenciar suas atividades diárias. A aplicação deve permitir que os usuários adicionem e removam tarefas da lista. Siga o passo a passo a seguir para criar a lista de tarefas interativas.
1 - Ao clicar no button Adicionar tarefa, uma função é chamada e você deve implementa-la. A função deve coletar os dados do forms e com isso criar um novo elemento (li) contendo o nome da tarefa (coletado do forms) e um button para remover a tarefa.
2 - Por fim, adicionar o novo elemento na lista ul id="listaTarefas" e resetar o forms. Quando o button remover a tarefa for pressionado, uma função é chamada e você deve implementar essa função. A função deve receber o button como parâmetro e a partir dele, você descobre o elemento pai do button que será o elemento li no qual é a tarefa que se deseja remover, sendo assim basta remover o elemento.

DICA: utilize a propriedade parentNode para obter o elemento pai, pois ela retorna o elemento pai associado. Por exemplo: botao.parentNode retorna o elemento pai do botão.
*/
function adicionarTarefa() {
    let tarefa = document.getElementById("tarefa");
    let listaTarefas = document.getElementById("listaTarefas");
    
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = "Remover";
    button.onclick = function () {
        removerTarefa(button);
    }
    
    li.innerHTML = tarefa.value;
    li.appendChild(button);
    listaTarefas.appendChild(li);
    tarefa.value = "";
}

function removerTarefa (button) {
    let li = button.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
}
