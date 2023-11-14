//2. Formulário de reserva:

/*coletar os dados do form de id reservaForm */
function enviarReserva() {
   
     
    const nome = document.forms["reservaForm"]["nome"].value;
    const telefone = document.forms["reservaForm"]["telefone"].value;
    const data = document.forms["reservaForm"]["data"].value;
    
    if (validarTelefone(telefone) == false) {
        alert("Telefone inválido! - Digite um telefone valido com 10 ou 11 dígitos");
        return ;
    }
   
    const dadosReserva = document.getElementById('dadosReserva');
    let dadosColetados =  `<h3>Listando os dados do formulário:</h3>
    <p>Nome     : ${nome} </p>
    <p>Telefone : ${telefone} </p>
    <p>Data     : ${data} </p>
    `;
  
    dadosReserva.innerHTML = `${dadosColetados}`;
    
    document.forms["reservaForm"].reset();
}

    
/*conferir se o número de telefone tem 10 ou 11 dígitos dica  obtenha uma nova string apenas com os dígitos numéricos utilizando o método replace.*/
function validarTelefone(telefone) {
    
    telefone = telefone.replace(/\D/g, '');
    if (telefone.length < 10 || telefone.length > 11) {
        return false;
    }
    else {
        return true; 
    }     
}   
