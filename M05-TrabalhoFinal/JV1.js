const gameboard = document.getElementById('gameboard');

function createBoard() {
  // criar 9 divs do tipo cell 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => marcarCelula(cell));  
            gameboard.appendChild(cell);    
        }
         
    }
}

let jogador1 = true; // Flag para alternar entre os jogadores
let placarJogador1 = 0;
let placarJogador2 = 0;


function marcarCelula(element) {
    if (!element.innerHTML) {
    const imgElement = document.createElement('img');
    imgElement.src = jogador1 ? 'IconeX.jpg' : 'IconeO.jpg';
    element.appendChild(imgElement);

    if (verificarVitoria()) {
        if (jogador1) {
        placarJogador1++;
        document.getElementById('player1').innerText = `Jogador 1 - ${placarJogador1} vitórias`;
        } else {
        placarJogador2++;
        document.getElementById('player2').innerText = `Jogador 2 - ${placarJogador2} vitórias`;
        }

        mostrarResultado();

        resetarTabuleiro();
    } else {
        jogador1 = !jogador1;
    }
    }
}

function verificarVitoria() {
    const cells = document.querySelectorAll('.cell');
    const symbols = jogador1 ? ['IconeX.png'] : ['IconeO.png'];

    // Verifica linhas
    for (let i = 0; i < 3; i++) {
    const linha = [cells[i * 3], cells[i * 3 + 1], cells[i * 3 + 2]];
    if (linha.every(cell => symbols.includes(cell.firstChild?.src))) {
        return true;
    }
    }

    // Verifica colunas
    for (let i = 0; i < 3; i++) {
    const coluna = [cells[i], cells[i + 3], cells[i + 6]];
    if (coluna.every(cell => symbols.includes(cell.firstChild?.src))) {
        return true;
    }
    }

    // Verifica diagonais
    const diagonal1 = [cells[0], cells[4], cells[8]];
    const diagonal2 = [cells[2], cells[4], cells[6]];

    if (diagonal1.every(cell => symbols.includes(cell.firstChild?.src)) || 
        diagonal2.every(cell => symbols.includes(cell.firstChild?.src))) {
    return true;
    }

    return false;
}

function resetarTabuleiro() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
    cell.innerHTML = '';
    });
}
  
function mostrarResultado() {   
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'flex';
}   

createBoard();
