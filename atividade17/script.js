// Aqui serão adicionados seus scripts
/*Imagine que você está construindo um site de notícias. O título principal é armazenado em um elemento com o id "noticia-principal". 
Crie um script que acesse esse elemento e exiba seu conteúdo em um alert.*/
const noticiaPrincipal = document.getElementById("noticia-principal");
alert(noticiaPrincipal.innerHTML);

/*Agora, no mesmo site de notícias, você deseja destacar os títulos das notícias. 
Use getElementsByTagName para selecionar todos os elementos <h1> 
e você poderá optar por aplicar uma classe chamada "titulo-noticia" a cada um deles para destacar esses títulos ou escrever estilos diretamente pelo style.
Como por exemplo:
nome.style.fontWeight = "bold";*/
const nome = document.getElementsByTagName("h1");
for (let i = 0; i < nome.length; i++) {
    nome[i].style.fontWeight = "bold";
    nome[i].style.color = "red";   
}

/*Em seu site de notícias, você quer que todos os parágrafos dentro das notícias tenham o mesmo conteúdo inicial. 
Use getElementsByClassName para selecionar todos os elementos com a classe "paragrafo-noticia" 
e atualize o conteúdo deles para "Leia a notícia completa".*/
const paragrafo = document.getElementsByClassName("paragrafo-noticia");
for (let i = 0; i < paragrafo.length; i++) {
    paragrafo[i].innerHTML = "Leia a notícia completa";
}

/*Você deseja permitir que os leitores do seu site de notícias deixem comentários. 
Crie um novo elemento de parágrafo (<p>) com o texto "Deixe seu comentário" 
e adicione-o como um filho do elemento com o id "secao-comentarios".*/
const comentario = document.createElement("p");
comentario.innerHTML = "Deixe seu comentário";
const secaoComentario = document.getElementById("secao-comentarios");
secaoComentario.appendChild(comentario);

/*Voce deseja adicionar uma lista de comentários ao seu site de notícias. 
Crie um novo elemento de lista (<ul>) 
e adicione-o como um filho do elemento com o id "secao-comentarios"
Inclua pelo menos 2 comentarios na lista com o texto "comentario <indice do item na lista>".*/
const lista = document.createElement("ul");
secaoComentario.appendChild(lista);

const comentario1 = document.createElement("li");
comentario1.innerHTML = "Comentário 1";
const comentario2 = document.createElement("li");
comentario2.innerHTML = "Comentário 2";
const comentario3 = document.createElement("li");
comentario3.innerHTML = "Comentário 3";
secaoComentario.appendChild(comentario1);
secaoComentario.appendChild(comentario2);
secaoComentario.appendChild(comentario3);

/*Você deseja adicionar um novo item à lista de comentários.
Crie um novo elemento de lista (<li>) com o texto "Comentário 4"
e adicione-o como um filho do elemento com o id "lista-comentarios".*/
const listaComentario = document.getElementById("secao-comentarios");
const comentario4 = document.createElement("li");
comentario4.innerHTML = "Comentário 4";
listaComentario.appendChild(comentario4);

/*No rodapé do site, você tem uma seção de "Últimas atualizações". 
Escreva um script que remova o último item da lista de atualizações. 
Você pode usar a função remove ou removeChild.*/
const listaAtualizacao = document.getElementById("ultimas-atualizacoes");
listaAtualizacao.removeChild(listaAtualizacao.lastElementChild);

/*Para melhorar a experiência do usuário, 
adicione um botão com o id "alternar-tema" que permite aos visitantes alternar entre um tema escuro e claro no site. 
Quando o botão é clicado, mude o esquema de cores do site, alterando as cores de fundo, texto e outros estilos relevantes. 
Isso pode ser feito manipulando as classes dos elementos ou diretamente atualizando os estilos.
Dica: tem diversas formas de realizar, vocês podem optar por DOM events, DOM Event Listener, 
... poderão encontrar essas informações no link disponibilizado no início da lista.*/
const classe1 = document.getElementsByClassName("titulo-noticia");
const classe2 = document.getElementsByClassName("paragrafo-noticia");
const header = document.getElementsByTagName("header");
const body = document.getElementsByTagName("body");
const footer = document.getElementsByTagName("footer");

const  botao = document.getElementById("alternar-tema");

botao.addEventListener("click", funcao_alternar_tema);

function funcao_alternar_tema() {
    for (let i = 0; i < classe1.length; i++) {
        classe1[i].style.fontWeight = "bold";
        classe1[i].style.color = "gray ";
    }
    for (let i = 0; i < classe2.length; i++) {
        classe2[i].style.fontWeight = "bold";
        classe2[i].style.color = "brown";
    }
    if (body[0].classList.contains("dark-mode")) {
        body[0].classList.remove("dark-mode");
        header[0].classList.remove("dark-mode");
        footer[0].classList.remove("dark-mode");
        for (let i = 0; i < classe1.length; i++) {
            classe1[i].classList.remove("dark-mode");
            classe2[i].classList.remove("dark-mode");
        }
    } else {
        body[0].classList.add("dark-mode");
        header[0].classList.add("dark-mode");
        footer[0].classList.add("dark-mode");
        for (let i = 0; i < classe1.length; i++) {
            classe1[i].classList.add("dark-mode");
            classe2[i].classList.add("dark-mode");
        }
    }
}




