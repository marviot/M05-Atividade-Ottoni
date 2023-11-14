const prompt = require('prompt-sync')();

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
const clientsStringJson = '[{"name":"Client 1", "cpf":"12345678901"},'+ 
                           '{"name":"Client 2", "cpf":"10987654321"},'+ 
                           '{"name":"Client 3", "cpf":"12345098765"},'+ 
                           '{"name":"Client 4", "cpf":"12345098765"},'+ 
                           '{"name":"Client 5", "cpf":"12345098765"},'+ 
                           '{"name":"Client 6", "cpf":"12345098765"},'+ 
                           '{"name":"Client 7", "cpf":"12345098765"},'+ 
                           '{"name":"Client 8", "cpf":"12345098765"},'+ 
                           '{"name":"Client 9", "cpf":"12345098765"},'+ 
                           '{"name":"Client 10", "cpf":"12345098765"}]';
const clients = JSON.parse(clientsStringJson);

/*Crie uma lista de produtos a partir da seguinte string em formato json*/
const productsStringJson = '[{"name":"Product 1", "price":1.00},'+ 
                            '{"name":"Product 2", "price":2.00},'+ 
                            '{"name":"Product 3", "price":3.00},'+ 
                            '{"name":"Product 4", "price":4.00},'+ 
                            '{"name":"Product 5", "price":5.00},'+ 
                            '{"name":"Product 6", "price":6.00},'+ 
                            '{"name":"Product 7", "price":7.00},'+ 
                            '{"name":"Product 8", "price":8.00},'+ 
                            '{"name":"Product 9", "price":9.00},'+ 
                            '{"name":"Product 10", "price":10.00}]';
const products = JSON.parse(productsStringJson);

/*criando um menu que permite ao usuario:
inserir clientes
inserir produtos
realizar venda
OBS: ao realizar venda, o usuario deve selecionar quantos produtos desejar*/
let menu = 0;
let clientes = [];
let produtos = [];
let vendas = [];
let clienteSelecionado = null;
let produtosSelecionados = [];
let venda = null;
let total = 0;
let continuar = true;

while (continuar) {
    console.log('1 - Inserir clientes');
    console.log('2 - Inserir produtos');
    console.log('3 - Realizar venda');
    console.log('0 - Sair');
    menu = prompt('Digite a opção desejada: ');
    switch (menu) {
        case '1':
            let nome = prompt('Digite o nome do cliente: ');
            let cpf = prompt('Digite o cpf do cliente: ');
            let cliente = new Cliente(nome, cpf);
            clientes.push(cliente);
            break;
        case '2':
            let nomeProduto = prompt('Digite o nome do produto: ');
            let preco = prompt('Digite o preço do produto: ');
            let produto = new Produto(nomeProduto, preco);
            produtos.push(produto);
            break;
        case '3':
            let cpfCliente = prompt('Digite o cpf do cliente: ');
            clientes.forEach(cliente => {
                if (cliente.cpf === cpfCliente) {
                    clienteSelecionado = cliente;
                }
            });
            if (clienteSelecionado === null) {
                console.log('Cliente não encontrado!');
                break;
            }
            console.log('Lista de produtos:');
            produtos.forEach(produto => {
                console.log(`Nome: ${produto.nome} | Preço: ${produto.preco}`);
            });
            let continuarSelecionando = true;
            while (continuarSelecionando) {
                let nomeProduto = prompt('Digite o nome do produto: (X - para sair) ');
                if (nomeProduto === 'X') {
                    continuarSelecionando = false;
                    break;
                }
                produtos.forEach(produto => {
                    if (produto.nome === nomeProduto) {
                        produtosSelecionados.push(produto);
                    }
                }
                );
            }
            venda = new Venda(clienteSelecionado, produtosSelecionados);
            total = venda.total();
            console.log(`Total da venda: ${total}`);
            vendas.push(venda);
            break;
        case '0':
            continuar = false;
            break;
        default:
            console.log('Opção inválida!');
            break;
    }
}


