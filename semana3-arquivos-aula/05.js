const prompt = require('prompt-sync')();


function soma(a, b) {
  return a + b;
}

const sm = function (a = 0, b = 0) {
  return a + b;
}

let s = soma(4, 5);
console.log(s);


function somaTudo(...lista) {
  let s = 0;
  for (let e of lista)
    s += e;
  return s;
}

function somaTudo2() {
  let s = 0;
  for (let e of arguments)
    s += e;
  return s;
}

console.log(somaTudo(1, 2, 3, 4, 5, 6));


(function () {
  console.log('Matheus');
})();


const addCont = (function () {
  let contador = 0;
  return () => ++contador;
})();

console.log(addCont());
console.log(addCont());
console.log(addCont());


function soma(a, b) {
  return a + b;
}

const som = (a, b) => a + b;

console.log(som(3, 4));