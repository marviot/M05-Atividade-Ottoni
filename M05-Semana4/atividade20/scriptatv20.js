// Aqui serão adicionados seus scripts

//1. Onclick:
//Ao clicar no botão "Clique-me!", queremos exibir uma mensagem simples.

const btnCliqueMe = document.getElementById("btnClick");
btnCliqueMe.addEventListener("click", function() {
    alert("Simples mensagem de alerta!");
}
);  //Fim do evento de clique do botão "Clique-me!"

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

 inputText.addEventListener("keydown", function() {
     inputText.style.color = "red";
     document.getElementById("outputMessage").innerHTML = "Teclado pressionado";
 }
 );  //Fim do evento de mudança de texto no campo de entrada
 inputText.addEventListener("keypress", function() {
     inputText.style.color = "green";
     document.getElementById("outputMessage").innerHTML = "Teclado acionado";
 }
 );  //Fim do evento de mudança de texto no campo de entrada
 inputText.addEventListener("keyup", function() {
     inputText.style.color = "blue";
     document.getElementById("outputMessage").innerHTML = "Teclado liberado";
 }
 );  //Fim do evento de mudança de texto no campo de entrada

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

//6. Ondrop, Ondragover, Ondragstart:
//Aprimorar a interatividade do elemento "box" ao implementar a funcionalidade de arrastar e soltar. 
//Isso permitirá que você mova o elemento pela página de forma dinâmica.
box.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", 'Levando ao box');
    box.style.backgroundColor = "pink";
}   
);  //Fim do evento de arrastar o elemento "box"
box.addEventListener("dragover", function(event) {
   event.preventDefault();
   box.style.backgroundColor = "lightblue";
}   
);  //Fim do evento de arrastar o elemento "box"
box.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    box.innerText = data;
    box.style.backgroundColor = "yellow";
}   
);  //Fim do evento de arrastar o elemento "box"

//7. Onload:
//Exibir um alerta quando a página estiver completamente carregada.
window.addEventListener("load", function() {
    alert("Página carregada!");
}
);  //Fim do evento de carregamento da página

//Atividade Extra


const btnChallenge = document.getElementById("btnChallenge");
let clickCounter    = 0;

btnChallenge.addEventListener("click", function() {
    clickCounter++;
    document.getElementById("count").innerHTML = clickCounter;
});  //Fim do evento de clique no botão "Desafio Extra"

setTimeout(function() {
    alert("Você conseguiu " + clickCounter + " cliques!");
}, 10000);