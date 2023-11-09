/*Crie a classe Produto com os atributos nome e preço*/
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

/*Crie a classe Cliente com os atributos nome e cpf*/
class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

/*Crie a classe Venda com atributo cliente e lista de produtos, e com o método total que calcula o valor total de todos os produtos da venda*/
class Venda {
    constructor(cliente, produtos) {
        this.cliente = cliente;
        this.produtos = produtos;
    }

    total() {
        let total = 0;
        this.produtos.forEach(produto => {
            total += produto.preco;
        });
        return total;
    }
}

/*Crie uma lista de clientes a partir da seguinte string em formato json*/
const clientesStringJson = '[{"name":"Cliente 1", "cpf":"12345678901"},'+ 
                           '{"name":"Cliente 2", "cpf":"10987654321"},'+ 
                           '{"name":"Cliente 3", "cpf":"12345098765"},'+ 
                           '{"name":"Cliente 4", "cpf":"12345098765"},'+ 
                           '{"name":"Cliente 5", "cpf":"12345098765"},'+ 
                           '{"name":"Cliente 6", "cpf":"12345098765"},'+ 
                           '{"name":"Cliente 7", "cpf":"12345098765"},'+ 
                           '{"name":"Cliente 8", "cpf":"12345098765"},'+ 
                           '{"name":"Cliente 9", "cpf":"12345098765"},'+ 
                           '{"name":"Cliente 10", "cpf":"12345098765"}]';
const clientes = JSON.parse(clientesStringJson);

/*Crie uma lista de produtos a partir da seguinte string em formato json*/
const produtosStringJson =  '[{"name":"Produto 1", "preco":1.00},'+ 
                            '{"name":"Produto 2", "preco":2.00},'+ 
                            '{"name":"Produto 3", "preco":3.00},'+ 
                            '{"name":"Produto 4", "preco":4.00},'+ 
                            '{"name":"Produto 5", "preco":5.00},'+ 
                            '{"name":"Produto 6", "preco":6.00},'+ 
                            '{"name":"Produto 7", "preco":7.00},'+ 
                            '{"name":"Produto 8", "preco":8.00},'+ 
                            '{"name":"Produto 9", "preco":9.00},'+ 
                            '{"name":"Produto 10", "preco":10.00}]';
const produtos = JSON.parse(produtosStringJson);

/*Crie o objeto vendao cliente 1 e todos os produtos, depois imprimna o valor total da venda*/
const venda1 = new Venda(clientes[0], produtos);
console.log(venda1.total());

/*Crie o objeto venda2 com o cliente 2 e todos os produtos, depois imprima o valor total da venda*/
const venda2 = new Venda(clientes[1], produtos);
console.log(venda2.total());

