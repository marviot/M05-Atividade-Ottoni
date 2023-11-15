// Aqui serão adicionados seus scripts

//1. Onclick:
//Ao clicar no botão "Clique-me!", queremos exibir uma mensagem simples.

const btnCliqueMe = document.getElementById("btnClick");
btnCliqueMe.addEventListener("click", function() {
    alert("Simples mensagem de alerta!");
}
);  //Fim do evento de clique do botão "Clique-me!"
/*
//2. Onchange:
//Quando o texto no campo de entrada for alterado, queremos mudar a cor do texto.

const inputText = document.getElementById("inputText");
inputText.addEventListener("change", function() {
    inputText.style.color = "red";
}
);  //Fim do evento de mudança de texto no campo de entrada

//3. Oninput:
//Queremos que a cor do texto mude à medida que o usuário digita.
inputText.addEventListener("input", function() {
    inputText.style.color = "green";
}       
);  //Fim do evento de mudança de texto no campo de entrada

//4. Onkeydown, Onkeypress, Onkeyup:
//Queremos registrar as diferentes etapas quando uma tecla é pressionada no campo de entrada.
//No manipulador de eventos, exiba mensagens em um parágrafo na tela para cada etapa.

//const inputText = document.getElementById("inputText");
//let textoEvento = ''
/*
// evento keydown
inputText.addEventListener("keydown", function teclou(this,'keydown') );

// evento keypress
inputText.addEventListener("keypress", function teclou(thi,'keypress') );

//evento keyup
inputText.addEventListener("keyup", function teclou(this,'keyup') );

function teclou(obj,msg) {  
    textoEvento = textoEvento + msg + ' - ';
    this.innerHTML = textoEvento;
}





//5. Onmouseover, Onmouseout:
//Mudar a cor de fundo quando o mouse está sobre o elemento "box".
const box = document.getElementById("box");
const boxcolor = box.style.backgroundColor;
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "red";
}
);  //Fim do evento de passar o mouse sobre o elemento "box"
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = boxcolor;
}
);  //Fim do evento de tirar o mouse de sobre o elemento "box