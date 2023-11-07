/* O objetivo dessa questão é organizar uma Lista de Tarefas.
DICA: Para o tópico 2 utilize o método includes para verificar se uma string está dentro do elemento. Você utilizará como condição que selecione apenas elementos que não contém a string "Feito"*/

const prompt = require('prompt-sync')();

let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];

/* 1 - Liste todas as tarefas na console, indicando a posição de cada uma no formato "Posição - Descrição". Use um loop para percorrer o array e imprima cada tarefa na console.*/
console.log('\nQuestão 1 - Lista de tarefas ');

function listaTarefas(lista){
    console.log(' ====  Lista de tarefas  ====');
    for (let i = 0; i < lista.length; i++) {
        console.log(`${i+1} - ${lista[i]}`);
    }
}

listaTarefas(tarefas);


/* 2 - Utilizando a propriedade filter, crie um novo array chamado tarefasPendentes que contenha apenas as tarefas que não contenham a palavra "Feito". Imprima o array resultante na console.*/
console.log('\nQuestão 2 - Lista de tarefas pendentes');
function concluida (tarefa) {
    return !tarefa.includes("Feito");}

let tarefasPendentes = tarefas.filter(concluida);

listaTarefas(tarefasPendentes);

/*3 - Utilizando a propriedade sort, ordene as tarefas em ordem alfabética. Imprima o array resultante na console.*/
console.log('\nQuestão 3 - Lista de tarefas ordenada');
let tarefasOrdenadas = tarefas.sort();
listaTarefas(tarefasOrdenadas);

/*4 - Utilizando a propriedade slice, crie um novo array chamado primeirasTarefas que contenha as duas primeiras tarefas da lista original. Imprima o array resultante na console.*/
console.log('\nQuestão 4 - Primeiras tarefas');
let primeirasTarefas = tarefas.slice(0,2);
listaTarefas(primeirasTarefas);

/*5 - Utilizando a propriedade pop, remova a última tarefa da lista. Imprima a lista de tarefas atualizada na console.*/
console.log('\nQuestão 5 - Remover ultima tarefa');
tarefas.pop();
listaTarefas(tarefas);

/*6 - Adicione uma nova tarefa ao final da lista. A nova tarefa deve ter a descrição "Ler livro novo". Imprima a lista de tarefas atualizada na console*/
console.log('\nQuestão 6 - Adicionar nova tarefa');
tarefas.push('Ler livro novo');
listaTarefas(tarefas);








