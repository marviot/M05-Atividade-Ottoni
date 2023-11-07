const prompt = require('prompt-sync')();

/*Passo 1 - Criando um Objeto:
Comece declarando uma variável chamada pessoa e atribua um objeto vazio a ela. Este objeto será a base para o seu perfil pessoal.*/

let pessoa = {};

/*Passo 2 - Adicionando Propriedades:
Adicione duas propriedades ao objeto pessoa. A primeira propriedade é nome, que deve conter o seu nome, e a segunda propriedade é idade, que deve conter a sua idade.*/
pessoa.nome = 'Ottoni';
pessoa.idade = 62;

/*Passo 3 - Acessando e Exibindo Propriedades:
Use console.log para exibir no console o nome e a idade da pessoa.*/
console.log(pessoa.nome);
console.log(pessoa.idade);

/*Passo 4 - Alterando Propriedades:
Altere a idade da pessoa para um valor diferente e exiba a idade atualizada no console.*/
let novaIdade = prompt('Digite a nova idade: ');
pessoa.idade = novaIdade;

console.log(pessoa.idade);

/*Passo 5 - Criando Mais uma Pessoa:
Crie outro objeto, pessoa2, e atribua a ele as propriedades nome e idade.*/

let pessoa2 = {
    nome: 'Maria',
    idade: 25
};

/*Passo 6 - Loop em Propriedades:
Use um loop for...in para percorrer as propriedades de pessoa2 e exibir seus nomes e valores.*/
for (let propriedade in pessoa2) {
    console.log(`${propriedade} : ${pessoa2[propriedade]}`);
}

/*Passo 7 - Função no Objeto:
Crie uma função chamada apresentacao dentro do objeto pessoa2 que exibe uma mensagem de saudação com o nome da pessoa.*/
pessoa2.apresentacao = function () {
    console.log(`Olá! Meu nome é ${this.nome}.`);
} 

pessoa2.apresentacao();

/*Passo 8 - Adicionando Propriedades Dinamicamente:
Adicione uma nova propriedade chamada email ao objeto pessoa e atribua um endereço de e-mail fictício a ela. Em seguida, exiba o e-mail no console.*/
pessoa.email = 'marviot@email.com'; 
console.log(pessoa);
console.log(pessoa.email);

/*Passo 9 - Excluindo Propriedades: Exclude a propriedade email do objeto pessoa e exiba o objeto no console.*/
delete pessoa.email;
console.log(pessoa);




