const tiles = Array.from(document.querySelectorAll('#tile'));
const result = document.querySelector('.result');
const resetButton = document.querySelector('#reset');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const openButton = document.querySelector('#open');
const closeBtn = document.querySelector('.close-btn');
const modalCont = document.querySelector('#modal-wrapper');
const displayPlayer = document.querySelector('.display-player');
const disp = document.querySelector('.display');
const firstX = document.querySelector('#firstX')
const firstO = document.querySelector('#firstO')
const firstP = document.querySelector('#firstplayer');
const hist = document.getElementById('history-wrapper');
const wrapper = document.querySelector('#history-wrapper');
//const rank = document.querySelector('#rank');

let board = [ '', '', '', '', '', '', '', '', ''];
let currentPlayer = '';
let firstPlayer = '';
let gameOn = true;
let isFirstPlayer = false;
let roundOver = false;
let i = 0;
let j = 0;
let k = 0;
let moves = []; 
let test = [];
let newboard = [];
disp.innerText = "Select the first player to move";

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';

const winningConditions = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

firstX.addEventListener('click', () => firstPlayerX(firstPlayer));
firstO.addEventListener('click', () => firstPlayerO(firstPlayer));

const firstPlayerX = (firstPlayer) => {
  firstPlayer = 'X';
  disp.innerText = "Player " + firstPlayer + "'s turn";
  currentPlayer = firstPlayer;
  isFirstPlayer = true;
  firstP.classList.add('off');
}

const firstPlayerO = (firstPlayer) => {
  firstPlayer = 'O';
  disp.innerText = "Player " + firstPlayer + "'s turn";
  currentPlayer = firstPlayer;
  isFirstPlayer = true;
  firstP.classList.add('off');
}

tiles.forEach ( (tile, index) => {
  tile.addEventListener('click', () => userAction(tile, index));
});

const userAction = ( tile, index) => {
  if ( tileEmpty(tile) && gameOn && isFirstPlayer) {
    j++;
    k++;
    tile.innerText = currentPlayer;
    updateBoard(index);
    listMoves(board);
    checkBoard();
    copytoHist(index);
    changePlayer();
    //console.log(j);
    //console.log(tile, index, moves, board);
    //console.log(tile, index,);
  }
}



const tileEmpty = (tile) => {
  if (tile.innerText === 'X' || tile.innerText === 'O'){
    return false;
  }
  return true;
}

const listMoves = ( board ) => {
  let newmove = JSON.parse(JSON.stringify(board));
  moves.push(newmove);
  //console.log(moves);
}

const changePlayer = () => {
  if ( roundOver === true ){
    return;
  }
  if ( currentPlayer === 'X' ){
    currentPlayer = 'O';
  } else if ( currentPlayer === 'O') {
    currentPlayer = 'X';
  }
  //displayPlayer.classList.remove(`player${currentPlayer}`);
  disp.innerText = "Player " + currentPlayer + "'s turn";
  //displayPlayer.classList.add(`player${currentPlayer}`);
}

const updateBoard = (index) => {
  board[index] = currentPlayer;
  //j++;
}

const copytoHist = (index, j) => {
  switch(index){ 
    case 0:   
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" >X</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } else if ( currentPlayer === 'O'){
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" >O</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } 
      break; 
    case 1: 
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" >X</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } else if ( currentPlayer === 'O'){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" >O</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } 
      break; 
    case 2: 
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" >X</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } else if ( currentPlayer === 'O'){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" >O</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } 
      break; 
    case 3: 
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >X</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } else if ( currentPlayer === 'O'){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >O</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } 
      break; 
    case 4: 
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >X</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } else if ( currentPlayer === 'O'){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >O</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } 
      break; 
    case 5: 
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >X</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } else if ( currentPlayer === 'O'){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >O</div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div></div>`
      } 
      break; 
    case 6: 
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >X</div><div class="cell" ></div><div class="cell" ></div></div>`
      } else if ( currentPlayer === 'O'){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >O</div><div class="cell" ></div><div class="cell" ></div></div>`
      } 
      break; 
    case 7: 
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >X</div><div class="cell" ></div></div>`
      } else if ( currentPlayer === 'O'){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >O</div><div class="cell" ></div></div>` 
      } 
      break; 
    case 8: 
      if ( currentPlayer === 'X' ){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >X</div></div>` 
      } else if ( currentPlayer === 'O'){ 
        hist.innerHTML += `<div class = "history" id = "history"> <div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" ></div><div class="cell" >O</div></div>` 
       }
  } 
} 

function checkBoard(){
  for (let i = 0; i<=7; i++){
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if ( a === '' || b === '' || c === ''){
      continue;
    }
    if ( a === b && b === c ) {
      roundOver = true;
      break;
    }
  }
  if (roundOver) {
    message(currentPlayer ==='X' ? PLAYERX_WON : PLAYERO_WON);
    gameOn = false;
    return;
  }
  if (!board.includes('')){
      message(TIE);
      roundOver = true
  }
}

const message = (type) => {
  switch(type){
    case PLAYERX_WON:
      result.innerHTML = 'Player <span class = "playerX">X</span> Won';
      disp.innerText = "Winner!";
      break;
    case PLAYERO_WON:
      result.innerHTML = 'Player <span class = "playerO">O</span> Won';
      disp.innerText = "Winner!";
      break;
    case TIE:
      result.innerHTML = 'TIE';
      disp.innerText = "Tie!";
  }
  
  result.classList.remove('off');
  resetButton.classList.add('on');
  nextButton.classList.add('on');
  prevButton.classList.add('on');
  openButton.classList.add('on');
  //wrapper.classList.add('on');
  
}

const resetTictactoe = () => {
  board = [ '', '', '', '', '', '', '', '', ''];
  gameOn = true;
  
  if (currentPlayer === 'O'){
    changePlayer();
  }

  tiles.forEach(tile =>{
    tile.innerText = '';
  })
  
  roundOver = false;
  result.classList.add('off');
  resetButton.classList.remove('on');
  nextButton.classList.remove('on');
  prevButton.classList.remove('on');
  openButton.classList.remove('on');
  wrapper.classList.remove('on');
  firstP.classList.remove('off');
  isFirstPlayer = false;
  hist.innerHTML = '';
  disp.innerText = "Select the first player to move";
  //console.log(board)
  moves = [];
  j = 0;
  k = 0;
  hist.innerHTML = '';
  
}
const prevTictactoe = () => {
  if (moves.length > 1 ){
    test[j] = moves.pop(board);
    console.log(test);
    console.log(moves);
    console.log(j);
    console.log(test[j]);
    //console.log(tiles[0]);
    //console.log(tiles[0].innerHTML);
    //console.log(moves[0][0]);
    //console.log(moves[0][1]);
    //console.log(moves[0][2]);
    //console.log(moves[0][3]);
    j--;
    for ( x=0; x<j; x++ ){
        for ( y=0; y<9; y++){
          //console.log(x,y);
          if ( moves[x][y] === 'X' ){
            tiles[y].innerHTML = 'X';
            //console.log(tiles[y].innerHTML)
          } else if ( moves[x][y] === 'O' ){
            tiles[y].innerHTML = 'O';
          } else if (  moves[x][y] === '' ){
            tiles[y].innerHTML = '';
          }
        }
    }
  }
}

const nextTictactoe = () => {
  if ( moves.length < k) {
    j++;
    moves.push(test[j]);
    for ( x=0; x<k; x++ ){
        for ( y=0; y<9; y++){
          console.log(k);
          console.log(x,y);
          if ( moves[x][y] === 'X' ){
            tiles[y].innerHTML = 'X';
            console.log(tiles[y].innerHTML)
          } else if ( moves[x][y] === 'O' ){
            tiles[y].innerHTML = 'O';
          } else if (  moves[x][y] === '' ){
            tiles[y].innerHTML = '';
          }
        }
    }
  }
}

resetButton.addEventListener('click', resetTictactoe);
prevButton.addEventListener('click', prevTictactoe);
nextButton.addEventListener('click', nextTictactoe);

openButton.addEventListener('click', () => {
  modalCont.classList.add('on');
});
                           
closeBtn.addEventListener('click', () => {
  modalCont.classList.remove('on');
});