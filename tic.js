var lineColor = "#sss";

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var canvasSize = 500;
var sectionSize = canvasSize / 3;
canvas.width = canvasSize;
canvas.height = canvasSize;
context.translate(0.5, 0.5);


const rand = function(num) {
    return Math.floor((Math.random() * num) + 1);
    };
  
const nextMove = function(board,isX) {
  let i = rand(3) - 1;
  let j = rand(3) - 1;

  while(board[i][j] !== ' '){
    i = rand(3) - 1;
    j = rand(3) - 1;
  } 
    
  return [i, j];
  
};

const makeMove = function(board, location, isX) {
  if(board[location[0]][location[1]] === " ") {
    if(isX) {
      board[location[0]][location[1]] = 'x';
    }  else  {
      board[location[0]][location[1]] = 'o';
    }
    return 0;
  }
  return -1;
};

const findWinner = function(board){

  let alert = {};
  
  if((board[0][0] === board[0][1]) && (board[0][0] === board[0][2]) && (board[0][1] === board[0][2]))
  {
    if(board[0][0] === "x")
      alert=  
      {
          winner: "x",
          winningLocations: [[0, 0],[0, 1],[0, 2]] 
      };
    if(board[0][0] === "o")
      alert=
      {
          winner: 'o',
          winningLocations: [[0, 0], [0, 1], [0, 2]] 
      };
  } 

  
  if((board[1][0] === board[1][1]) && (board[1][0] === board[1][2]) && (board[1][1] === board[1][2]))
  {
    if(board[1][0] === "x")
      alert=
      {
          winner: 'x',
          winningLocations: [[1, 0], [1, 1], [1, 2]] 
      };
    if(board[1][0] === "o")
      alert=
      {
          winner: 'o',
          winningLocations: [[1, 0], [1, 1], [1, 2]] 
      };
  }
  
  
  if((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[0][0] === board[2][0]))
  {
    if(board[0][0] === "x")
      alert=
      {
          winner: 'x',
          winningLocations: [[0, 0], [1, 0], [2, 0]] 
      };
    if(board[0][0] === "o")
      alert=
      {
          winner: 'o',
          winningLocations: [[0, 0], [1, 0], [2, 0]] 
      };
  }
  
  if((board[2][0] === board[2][1]) && (board[2][0] === board[2][2]) && (board[2][1] === board[2][2]))
  {

    if(board[2][0] === "x")
      alert=
      {
          winner: 'x',
          winningLocations: [[2, 0], [2, 1], [2, 2]] 
      };
    if(board[2][0] === "o")
      alert=
      {
          winner: 'o',
          winningLocations: [[2, 0], [2, 1], [2, 2]] 
      };
  }
  
  if((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[0][1] === board[2][1]))
  {
    if(board[0][1] === "x")
      alert=
      {
          winner: 'x',
          winningLocations: [[0, 1], [1, 1], [2, 1]] 
      };
    if(board[0][1] === "o")
      alert=
      {
          winner: 'o',
          winningLocations: [[0, 1], [1, 1], [2, 1]] 
      };
  }
  
  if((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[0][2] === board[2][0]))
  {
    if(board[0][2] === "x")
      alert=
      {
          winner: 'x',
          winningLocations: [[0, 2],[1, 1],[2, 0]] 
      };
    if(board[0][2] === "o")
      alert=
      {
          winner: 'o',
          winningLocations: [[0, 2],[1, 1], [2, 0]] 
      };
  }
  
  if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[0][0] === board[2][2]))
  {
    if(board[0][0] === "x")
      alert=
      {
          winner: 'x',
          winningLocations: [[0, 0],[1, 1], [2, 2]] 
      };
    if(board[0][0] === "o")
      alert=
      {
          winner: 'o',
          winningLocations: [[0, 0], [1, 1], [2, 2]] 
      };
  }
  if((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[0][2] === board[2][2]))
  {
    if(board[0][2] === "x")
      alert=
      {
          winner: 'x',
          winningLocations: [[0, 2], [1, 2], [2, 2]] 
      };
    if(board[0][2] === "o")
      alert=
      {
          winner: 'o',
          winningLocations: [[0, 2], [1, 2], [2, 2]] 
      };
  }


  let gameOver = true;

  for(let i = 0; i < 3; i++)

    for(let j = 0; j < 3; j++)

      if(board[i][j] === " ")

        gameOver = false;

  if(gameOver&&!alert.hasOwnProperty("winner"))

  alert=
  {
    winner: 'none'
  };

  if(alert.hasOwnProperty("winner"))

    return alert;

  else 

    return;
};


var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let isX = true;
const update = function(isX){
  if(!isX){
    const location = nextMove(board, isX);
    makeMove(board, location, isX);
    drawO(location[0] * sectionSize, location[1] * sectionSize);
  }
};


function drawO (xCordinate, yCordinate) {
  var halfSectionSize = (0.5 * sectionSize);
  var centerX = xCordinate + halfSectionSize;
  var centerY = yCordinate + halfSectionSize;
  var radius = (sectionSize - 100) / 2;
  var startAngle = 0 * Math.PI; 
  var endAngle = 2 * Math.PI;

  context.lineWidth = 10;
  context.strokeStyle = "#01bBC2";
  context.beginPath();
  context.arc(centerX, centerY, radius, startAngle, endAngle);
  context.stroke();
}

function drawX (xCordinate, yCordinate) {
  context.strokeStyle = "#f1be32";

  context.beginPath();
  
  var offset = 50;
  context.moveTo(xCordinate + offset, yCordinate + offset);
  context.lineTo(xCordinate + sectionSize - offset, yCordinate + sectionSize - offset);

  context.moveTo(xCordinate + offset, yCordinate + sectionSize - offset);
  context.lineTo(xCordinate + sectionSize - offset, yCordinate + offset);

  context.stroke();
}

function drawLines (lineWidth, strokeStyle) {
  var lineStart = 4;
  var lineLenght = canvasSize - 5;
  context.lineWidth = lineWidth;
  context.lineCap = 'round';
  context.strokeStyle = strokeStyle;
  context.beginPath();

  //Horizontal lines 
  for (var y = 1; y <= 2; y++) {  
    context.moveTo(lineStart, y * sectionSize);
    context.lineTo(lineLenght, y * sectionSize);
  }

  //Vertical lines
  for (var x = 1; x <= 2; x++) {
    context.moveTo(x * sectionSize, lineStart);
    context.lineTo(x * sectionSize, lineLenght);
  }

  context.stroke();
}

drawLines(10, lineColor);


canvas.addEventListener('click', function(evt) {
  const x = Math.floor(evt.offsetX/sectionSize);
  const y = Math.floor(evt.offsetY/sectionSize);
    if(findWinner(board)) {
    alert('The winner is ' + findWinner(board).winner + ', winning locations are ' + findWinner(board).winningLocations);
    }
  makeMove(board, [x,y], isX);
  drawX(x * sectionSize, y * sectionSize);
  isX=!isX;
  update(isX);
  isX=!isX;

}, false);
