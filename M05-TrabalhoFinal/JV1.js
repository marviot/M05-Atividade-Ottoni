const gameboard = document.getElementById('gameboard');
let celulas = ['', '', '', '', '', '', '', '', ''];

function createBoard() {
  // criar 9 divs do tipo cell 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = i * 3 + j;
            cell.addEventListener('click', () => marcarCelula(cell));  
            gameboard.appendChild(cell);    
        }
    }
}
    

let jogador1 = true; // Flag para alternar entre os jogadores
let placarJogador1 = 0;
let placarJogador2 = 0;
let mensagemResultado = '';
let novojogo = true;
document.getElementById('quemVaiJogar').innerText =  
    jogador1 ? document.getElementById('jogador1').value : document.getElementById('jogador2').value;


function marcarCelula(element) {
    if (!element.innerHTML) {
    const imgElement = document.createElement('img');
    imgElement.src = jogador1 ? 'IconeX.jpg' : 'IconeO.jpg';
    element.appendChild(imgElement);
// marca no array celulas a jogada
    celulas[element.id] = jogador1 ? 'X' : 'O';

    if (verificarVitoria()) {
        if (jogador1) {
            mensagemResultado = `Jogador ${document.getElementById('jogador1').value} venceu!`;
            alert(mensagemResultado);
            placarJogador1++;
            document.getElementById('jog1').innerText = `Jogador ${document.getElementById('jogador1').value}`;
            document.getElementById('vit1').innerText = ` - ${placarJogador1}`;
            resetarTabuleiro();
        } else {
            mensagemResultado = `Jogador ${document.getElementById('jogador2').value} venceu!`;
            alert(mensagemResultado);
            placarJogador2++;
            document.getElementById('jog2').innerText = `Jogador ${document.getElementById('jogador2').value}`;
            document.getElementById('vit2').innerText = ` - ${placarJogador2}`;
            resetarTabuleiro();
            jogador1 = true;
        }
    } else {
        jogador1 = !jogador1;
    }
    }
}

function verificarVitoria() {
    const marca = jogador1 ? 'X' : 'O';

    // Declare as variáveis fora dos loops
    let linha, coluna, diagonal1, diagonal2;

    // Verifica linhas
    for (let i = 0; i < 3; i++) {
        linha = [celulas[i * 3], celulas[i * 3 + 1], celulas[i * 3 + 2]];
        //alert (linha); 
        if (linha[0] === marca && linha[1] === marca && linha[2] === marca) {
            return true;
        }
    }
  
    // Verifica colunas
    for (let i = 0; i < 3; i++) {
        coluna = [celulas[i], celulas[i + 3], celulas[i + 6]];
        if (coluna[0] === marca && coluna[1] === marca && coluna[2] === marca)  {
            return true;
        }
    }

    // Verifica diagonais
    diagonal1 = [celulas[0], celulas[4], celulas[8]];
    diagonal2 = [celulas[2], celulas[4], celulas[6]];
    // se todas as células da diagonal1 ou todas da diagonal 2 possuem a mesma marca retorna true
    if ((diagonal1[0] === marca && diagonal1[1] === marca && diagonal1[2] === marca)  || 
        (diagonal2[0] === marca && diagonal2[1] === marca && diagonal2[2] === marca))  {
        return true;
    }

    return false;
}

function resetarTabuleiro() {
    celulas = ['', '', '', '', '', '', '', '', ''];
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
    cell.innerHTML = '';
    });
}
  
function reiniciarPartida() {
    createBoard();
    celulas = ['', '', '', '', '', '', '', '', ''];
    resultado = document.getElementById('scoreborad');
    resultado.style.display = 'none';
}

function reiniciarContadores() {
    placarJogador1 = 0;
    placarJogador2 = 0;
    document.getElementById('jog1').innerText =
    document.getElementById('jogador1').value;

    document.getElementById('jog2').innerText =
    document.getElementById('jogador2').value;

    document.getElementById('vit1').innerText = ` - ${placarJogador1}`;
    document.getElementById('vit2').innerText = ` - ${placarJogador2}`;
}

function reiniciarJogo() {
    reiniciarContadores();
    reiniciarPartida();
}


createBoard();
