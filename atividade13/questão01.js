//verifica se o email é do gmail e imprime o nome de usuário e o domínio usando o comando slice
const prompt = require('prompt-sync')();

function verificaEmail(email) {
    const gmail = 'gmail.com';
    //let usuario = '';
    //let dominio = '';

    let dominio = email.slice(email.indexOf('@') + 1);
    let usuario = email.slice(0, email.indexOf('@'));

    if (dominio == gmail) {
        console.log('Usuário: ' + usuario);
        console.log('Domínio: ' + dominio);
    } else {    
       console.log('Email inválido!');
       console.log('Usuário: ' + usuario);
    }
  
}

let email = prompt('Digite um email: ');

verificaEmail(email);
