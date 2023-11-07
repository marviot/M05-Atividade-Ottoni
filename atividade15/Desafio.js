const prompt = require('prompt-sync')();
/*Desafio: Criando um Objeto de Animal de Estimação:

Crie um objeto chamado "animalDeEstimacao" com as seguintes propriedades:
"nome": O nome do animal de estimação (por exemplo, "Rex").
"especie": A espécie do animal (por exemplo, "Cachorro").
"idade": A idade do animal em anos.*/

let animalDeEstimacao = {
    nome: 'Rex',
    especie: 'Cachorro',
    idade: 5
};  

/*2 - Crie um método chamado "fazerBarulho" que exibe uma mensagem no console, como "O [nome] está latindo!" para um cachorro*/
animalDeEstimacao.fazerBarulho = function () {
    console.log(`O ${this.nome} está latindo!`);
}

/*3.Crie um método chamado "envelhecer" que aumenta a idade do animal em um ano.*/
animalDeEstimacao.envelhecer = function () {
    this.idade++;
}

/*4 - Crie outro método chamado "mudarNome" que atualiza o nome do animal de estimação.*/   
animalDeEstimacao.mudarNome = function (novoNome) {
    this.nome = novoNome;
}

let novoNome = prompt('Digite o novo nome do animal: ');
animalDeEstimacao.mudarNome(novoNome);

/* 5 Teste o seu objeto de animal de estimação criando uma instância, exibindo seu nome, espécie e idade, fazendo-o emitir um som e, em seguida, fazendo-o envelhecer e trocar de nome. */
console.log(animalDeEstimacao);
animalDeEstimacao.fazerBarulho();

let anos = prompt('Digite quantos anos o animal envelheceu: ');

for (let i = 0; i < anos; i++) {
    animalDeEstimacao.envelhecer();
}

console.log(animalDeEstimacao);
