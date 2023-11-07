/* Nessa questão, você irá trabalhar com conceitos que vimos em aula para manipular um array de números naturais.
Você utilizará um array de números naturais, pode ser definido por você. Como exemplo irei deixar um abaixo:
   let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];*/

let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

/*Crie uma função chamada ehPrimo que recebe um número como parâmetro e retorna true se o número for primo e false se não for. Lembre-se de que um número primo é aquele que é divisível apenas por 1 e por ele mesmo.*/
function ehPrimo(numero) {
    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
        }
    }
    return primo;
}

/*2 - Utilizando a propriedade filter, crie um novo array chamado numerosPrimos que contenha apenas os números primos do array original. Imprima o array resultante na console.*/
console.log('\nQuestão 2 - Números primos');
let numerosPrimos = numeros.filter(ehPrimo);
console.log(numerosPrimos);

/*3 - Utilizando a propriedade map, crie um novo array chamado quadradosDosPrimos que contenha o quadrado de cada número primo. Imprima o array resultante na console.*/
console.log('\nQuestão 3 - Quadrados dos números primos');
let quadradosDosPrimos = numerosPrimos.map(function (numero) {
    return numero * numero;
}); 
console.log(quadradosDosPrimos);










