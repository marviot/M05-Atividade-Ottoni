const prompt = require("prompt-sync")();

let num1 = parseInt( prompt("Digite o primeiro numero: "));
let num2 = parseInt(prompt("Digite o segundo  numero: "))  ;

let produto = 0;

for (let i = 0; i < num2; i++) {
  produto += num1;
}

console.log(`O produto de ${num1} e ${num2} é ${produto}`);