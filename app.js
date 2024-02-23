'use strict';

const arr = new Array(9).fill(null);
let currentPlayer = '✖️';

function checkWinner() {
    if ((arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[3] == arr[4] && arr[4] == arr[5]) ||
    ) {
        console.log(currentPlayer);
    }
}

function handleClick(ele) {
    const id = ele.id;
    document.getElementById(id).innerText = currentPlayer;
    currentPlayer = currentPlayer === '✖️' ? '⭕' : '✖️';
}


012
345
678
036
147
258
048
246
