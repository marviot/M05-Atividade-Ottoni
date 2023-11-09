// Classe base (superclasse)
class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  
    comer() {
      console.log(`${this.nome} está comendo.`);
    }
  }
  
  // Classe derivada (subclasse)
  class Gato extends Animal {
    constructor(nome, especie, cor) {
      // Chamando o construtor da superclasse
      super(nome);
      this.cor = cor;
    }
  
    miar() {
      console.log(`${this.nome} está miando.`);
    }
  }
  
  // Criando uma instância da classe derivada
  const meuGato = new Gato('Mittens', 'gato', 'branco');
  
  // Chamando métodos da superclasse e da subclasse
  meuGato.comer(); // Herda o método da superclasse
  meuGato.miar();  // Método específico da subclasse
  