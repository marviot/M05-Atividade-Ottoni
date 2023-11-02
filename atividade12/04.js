// criar uma sequencia de fibonacci com a quantidade de numeros informada pelo usuario usando o comando switch  */
const prompt = require('prompt-sync')();

function calcularFibonacci(n) {
  let primeiro = 0;
  let segundo = 1;
  let proximo = 1;
  let resultado = '0, 1'

    for (let i = 2; i <= n; i++) {       
        proximo = primeiro + segundo;
        primeiro = segundo;
        segundo = proximo;
        resultado += ', ' + proximo;
    }   
    
    return resultado;
}

let numero = parseInt(prompt('Digite um número inteiro positivo: '));

if(numero <= 0){
    console.log('Nenhum número na sequência.');
}
else {
   switch(numero){
    case 0:
        console.log('0');
        break;  
    case 1: 
        console.log('0, 1');
        break;
    default:
       console.log( calcularFibonacci(numero));

    }       
}




