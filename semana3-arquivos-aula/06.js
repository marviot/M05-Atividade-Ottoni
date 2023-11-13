function Endereco(rua, numero) {
  this.rua = rua;
  this.numero = numero;
  this.obter = function () {
    return this.rua + ', ' + this.numero;
  }
}

function Pessoa(nome, sobrenome, idade, endereco) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.endereco = endereco;
  this.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
  };
  this.obter = function () {
    console.log(`\nnome : ${this.nome}` +
      `\nsobrenome : ${this.sobrenome}` +
      `\nidade : ${this.idade}` +
      `\nendereco : ${this.endereco.obter()}`
    );
  }
}

const e = new Endereco('RUA X', 333);
const p2 = new Pessoa('MARIA', 'PEREIRA', 26, e);

p2.obter();



