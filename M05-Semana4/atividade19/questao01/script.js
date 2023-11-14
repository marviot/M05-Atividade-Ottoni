/* 1. Coletando os dados de um formulário e adicionando conteúdo em uma div:

Usando o arquivo HTML no diretorio corrente, recuperar os dados do form de id cadastroForm.
Criar uma div adicionando-a no final do body, e incluir os dados do form na div.
Ao final, resetar o forms.
*/
function enviarCadastro() {
      
    const nome = document.forms["cadastroForm"]["nome"].value;
    const email = document.forms["cadastroForm"]["email"].value;
    const senha = document.forms["cadastroForm"]["senha"].value;
    
    const div = document.createElement('div');
    const dadosColetados =  `<h3>Listando os dados do formulário:</h3>
      <p>Nome  : ${nome} </p>
      <p>Email : ${email} </p>
      <p>Senha : ${senha} </p>`;
       
    div.innerHTML = `${dadosColetados}`;
    document.body.appendChild(div);
       
    document.forms["cadastroForm"].reset();

}
