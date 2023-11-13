class Pessoa {
  constructor(nome, sobrenome, idade, altura) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.altura = altura;
    this.idade = idade;
  }
  imprimir() {
    console.log(this.nome + ' ' + this.sobrenome);
    console.log(this.idade);
    console.log(this.altura);
  }
}

class PessoaFisica extends Pessoa {
  constructor(nome, sobrenome, idade, altura, cpf) {
    super(nome, sobrenome, idade, altura);
    this.cpf = cpf;
  }
  imprimir() {
    super.imprimir();
    console.log(this.cpf);
  }
}

const joao = new Pessoa("JOAO", "OLIVEIRA", 20, 1.80);
const maria = new PessoaFisica(
  "MARIA", "CARVALHO", 25, 1.75, '12341213244');

joao.imprimir();
console.log();
maria.imprimir();
