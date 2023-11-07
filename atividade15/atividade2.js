const prompt = require('prompt-sync')();

/*Suponha que você deseja criar um objeto para representar um livro. Crie um objeto chamado livro com as seguintes propriedades:

titulo: O título do livro (por exemplo, "Aventuras de Alice no País das Maravilhas").
autor: O autor do livro (por exemplo, "Lewis Carroll").
anoPublicacao: O ano de publicação do livro (por exemplo, 1865).
genero: O gênero do livro (por exemplo, "Fantasia").
disponivel: Um valor booleano que indica se o livro está disponível para empréstimo.

Adicione essas propriedades ao objeto livro e atribua valores fictícios a elas. Em seguida, use console.log para exibir todas as informações do livro no console.
*/
function Livro(titulo, autor, anoPublicacao, genero, disponivel) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.genero = genero;
    this.disponivel = disponivel;
}

const livro = new  Livro( 'Aventuras de Alice no País das Maravilhas', 'Lewis Carroll', 1865, 'Fantasia', true);
const livro2 = new  Livro( 'Aventuras', 'Lewis ', 1865, 'Fantasia', true);
/*let livro = {
    titulo: 'Aventuras de Alice no País das Maravilhas',
    autor: 'Lewis Carroll',
    anoPublicacao: 1865,
    genero: 'Fantasia',
    disponivel: true,
}*/

for (let propriedade in livro) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}

console.log(' --------------------- ');
/*Além disso, crie um método chamado emprestarLivro no objeto livro que define a propriedade disponivel como false quando o livro é emprestado. Chame esse método para simular o empréstimo do livro e exiba a disponibilidade atual no console.*/

Livro.prototype.emprestarLivro = function () {
    this.disponivel = false;
}

livro.emprestarLivro();

for (let propriedade in livro) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}
console.log(' --------------------- ');
for (let propriedade in livro2) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}


livro2.emprestarLivro();