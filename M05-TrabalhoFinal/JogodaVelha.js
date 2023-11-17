//Criar uma matriz 3x3 dentro da div gameboard
const matrix = document.getElementById('matrix');
const gameBoard = document.getElementById('gameboard');
const jogador1   = document.getElementById('jogador1');
const jogador2   = document.getElementById('jogador2');

//preencher a matriz com celulas
function createMatrix() {
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', i + '-' + j);
            row.appendChild(cell);
        }
        matrix.appendChild(row);
    }
}

//criar o tabuleiro
function createBoard() {
    createMatrix();
    gameBoard.appendChild(matrix);
}


createBoard();
