
//1. Visibilidade de um elemento://

/*usando o arquivo index.html no diretori corrente, você tem uma página sobre uma pessoa. Nessa questão, 
você utilizará o conhecimento adquirido em aula em relação a visibilidade de um elemento. 
No template tem uma div "foto", você irá fazer um botão que ao ser clicado esconde/mostra a div.
Dica: Utilize o evento onclick para fazer a ação de esconder/mostrar a div.*/
function esconderMostrar(){
    let foto = document.getElementById("foto");
    if(foto.style.display == "none"){
        foto.style.display = "block";
    }else{
        foto.style.display = "none";
    }
}   
/*Crie uma div ao lado da div foto, e crie nela o  botão "Mostrar/Esconder" que ao ser clicado mostra a div "foto"*/
const divbotao = document.createElement("div");
divbotao.setAttribute("id", "divbotao");
const botao = document.createElement("button");
const divPerfil = document.getElementById("perfil");
divPerfil.appendChild(divbotao);
divbotao.appendChild(botao);
botao.setAttribute("id", "botao");
botao.setAttribute("onclick", "esconderMostrar()");
botao.innerHTML = "Mostrar/Esconder";

//2. Formatação:

/*usando o arquivo index.html no diretorio corrente, você deseja deixar o usuário livre para escolher a formatação do texto que está presente na div "sobre". 
Você deverá inserir um input e um button para que o usuário digite o tipo da formatação e clique no botão para alterar. 
A função que deve ser feita, irá alterar o text-align da div. */
function alterarTexto(){
    let texto = document.getElementById("sobre");
    let input = document.getElementById("input").value;
    if(input == "E"){
        input = "left";
    }
    if(input == "C"){
        input = "center";
    }
    if(input == "D"){
        input = "right";
    }
    texto.style.textAlign = input;
} 
/*Crie um input e um botão para que o usuário digite o tipo da formatação e clique no botão para alterar.   */
const divinput = document.createElement("div");
divinput.setAttribute("id", "divinput");
const input = document.createElement("input");
input.setAttribute("id", "input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Alinhe: E - C - D ");
const divsobre = document.getElementById("sobre");
divsobre.appendChild(divinput);
divinput.appendChild(input);
const divbotao2 = document.createElement("div");
divbotao2.setAttribute("id", "divbotao2");
const botao2 = document.createElement("button");
divsobre.appendChild(divbotao2);    
divbotao2.appendChild(botao2);
botao2.setAttribute("id", "botao2");
botao2.setAttribute("onclick", "alterarTexto()");
botao2.innerHTML = "Alterar Texto";

//3. Alterando a cor do rodapé e do título:

/*acrescentar um input e um button para que o usuário escolha a cor de fundo do footer e do header, 
se atentando quando o usuário escolher a cor white para alterar a cor do texto para black, 
análogo para a escolha black e trocar a cor do texto para white.*/
function alterarCor(){
    let footer = document.getElementById("footer");
    let header = document.getElementById("header");
    let input = document.getElementById("input2").value;
    if(input == "W"){
        footer.style.backgroundColor = 'white';
        footer.style.color = 'black';
        header.style.backgroundColor = 'white';
        header.style.color = 'black'
    }
    if(input == "B"){
        footer.style.backgroundColor = 'black';
        footer.style.color = 'white';
        header.style.backgroundColor = 'black';
        header.style.color = 'white';
    }
}
/*Crie um input e um botão para que o usuário escolha a cor de fundo do footer e do header,
se atentando quando o usuário escolher a cor white para alterar a cor do texto para black,
análogo para a escolha black e trocar a cor do texto para white.*/
const divinput2 = document.createElement("div");
divinput2.setAttribute("id", "divinput2");
const input2 = document.createElement("input");
input2.setAttribute("id", "input2");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Cor de fundo: W -white - B - black");
const divfooter = document.getElementById("footer");
divfooter.appendChild(divinput2);
divinput2.appendChild(input2);
const divbotao3 = document.createElement("div");
divbotao3.setAttribute("id", "divbotao3");
const botao3 = document.createElement("button");
divfooter.appendChild(divbotao3);
divbotao3.appendChild(botao3);
botao3.setAttribute("id", "botao3");
botao3.setAttribute("onclick", "alterarCor()");
botao3.innerHTML = "Alterar Cor";

//4. Alterando Fonte:

/*você deverá acrescentar um input e um button para que o usuário escolha a cor de fundo do footer e do header, se atentando quando o usuário escolher a fonte do texto para a div "sobre".*/
function alterarFonte(){
    let texto = document.getElementById("sobre");
    let input = document.getElementById("input3").value;
    if(input == "A"){
        input = "Arial";
    }
    if(input == "C"){
        input = "Courier New";
    }
    if(input == "V"){
        input = "Verdana";
    }
    if(input == "L"){
        input = "Lucida Console";
    }
    texto.style.fontFamily = input;
}
/*Crie um input e um botão para que o usuário escolha a fonte do texto para a div "sobre".*/
const divinput3 = document.createElement("div");
divinput3.setAttribute("id", "divinput3");
const input3 = document.createElement("input");
input3.setAttribute("id", "input3");
input3.setAttribute("type", "text");
input3.setAttribute("placeholder", "Fonte: A - Arial - C - Courier New - V - Verdana - L - Lucida Console");
const divsobre2 = document.getElementById("sobre");
divsobre2.appendChild(divinput3);
divinput3.appendChild(input3);
const divbotao4 = document.createElement("div");
divbotao4.setAttribute("id", "divbotao4");
const botao4 = document.createElement("button");
divsobre2.appendChild(divbotao4);
divbotao4.appendChild(botao4);
botao4.setAttribute("id", "botao4");
botao4.setAttribute("onclick", "alterarFonte()");
botao4.innerHTML = "Alterar Fonte";


//5.  Modo escuro/claro:
/* acrescentar um botão para a seleção do modo escuro/claro, para a section "conteudo" e para a div "sobre".*/
function escuro_claro(){
    let conteudo = document.getElementById("conteudo");
    //let sobre = document.getElementById("sobre");
    //let modo = conteudo.style.backgroundColor;
  
    if(conteudo.style.backgroundColor == "black"){
        conteudo.style.backgroundColor = 'white';
        conteudo.style.color = 'black';
        sobre.style.backgroundColor = 'white';
        sobre.style.color = 'black';
    }
    else{
    //if(conteudo.style.backgroundColor == "white"){
        conteudo.style.backgroundColor = 'black';
        conteudo.style.color = 'white';
        sobre.style.backgroundColor = 'black';
        sobre.style.color = 'white';
    }
}
/*Crie um botão para a seleção do modo escuro/claro, para a section "conteudo" e para a div "sobre".*/
const divbotao5 = document.createElement("div");
divbotao5.setAttribute("id", "divbotao5");
const botao5 = document.createElement("button");
const divconteudo = document.getElementById("conteudo");
divconteudo.appendChild(divbotao5);
divbotao5.appendChild(botao5);
botao5.setAttribute("id", "botao5");
botao5.setAttribute("onclick", "escuro_claro()");
botao5.innerHTML = "Modo Escuro/Claro";


