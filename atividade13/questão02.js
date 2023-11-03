/*validar um nome de usuario com minino de 12 caracteres, não conter admin e ser formado por user@ nome
usando while para receber nomes ate encontrar um nome valido*/
const prompt = require('prompt-sync')();

function validaUsuario(usuario) {
    let usuarioValido = false;
    let usuarioMinimo = 12;
    let usuarioAdmin = 'admin';
    let usuarioNome = 'user@';

    if (usuario.length >= usuarioMinimo && usuario.indexOf(usuarioAdmin) == -1 && usuario.indexOf(usuarioNome) == 0) {
        usuarioValido = true;
    }
    else{
        usuarioValido = false;
        if (usuario.length < usuarioMinimo) {
            console.log('O nome de usuário deve ter no mínimo 12 caracteres!');
        }
        if (usuario.indexOf(usuarioAdmin) != -1) {
            console.log('O nome de usuário não pode conter a palavra admin!');
        }
        if (usuario.indexOf(usuarioNome) != 0) {
            console.log('O nome de usuário deve começar com user@!');
        }
    }
    return usuarioValido;
}

let usuario = prompt('Digite um nome de usuário: ');

while (!validaUsuario(usuario)) {
    console.log('Usuário inválido!');
    usuario = prompt('Digite um nome de usuário: ');
}