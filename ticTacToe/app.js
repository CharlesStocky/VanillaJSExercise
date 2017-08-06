//this code is terrible. 
var numClicks = 0; 
window.addEventListener("load", function(){
  
  var board = document.querySelector(".ticTac");
  board.addEventListener("click", function(event) {
    var targ = event.target;
    (function(){
      numClicks++;
      var status = document.getElementById("statusUpdate");
      status.innerHTML = '';
      //if user clicks a square that already has been clicked
      
      if(event.target.innerHTML === "x" || event.target.innerHTML === "o"){
        //clunky way of doing this, but decrements 1 if user clicks same square (after incrementing one) to avoid letter switching
        numClicks--;
        
        status.innerHTML = "That square has been clicked already.";
      
      //used to switch between x and o, i thought to use a boolean instead, but this also insures you cant do more than 9 turns
      } else if(numClicks % 2 === 0 && numClicks <= 9){
        handler.cellButton("o", targ);
      } else if(numClicks <= 9) {
        handler.cellButton("x", targ);
      }
    })();
  });
});


var ticTac = {
  board: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  checkBoard: function(letter, cellId) {
    debugger;
    var numClicks = 0;
    var cellInsertInd = parseInt(cellId.id) - 1; 
    var letters = letter;
    var boards = this.board;
    boards.splice(cellInsertInd , 1, letters);
    var status = document.getElementById("statusUpdate"); 
    if(boards[0] === letters && boards[1] === boards[2] && boards[2] === boards[0]){
      status.innerHTML = letters + " wins.";
    } else if(boards[0] === letters && boards[3] === boards[6] && boards[6] === boards[0]){
      status.innerHTML = letters + " wins.";
    } else if(boards[0] === boards[4] && boards[8] === boards[0]){
      status.innerHTML = letters + " wins.";
    } else if(boards[1] === boards[4] && boards[7] === boards[1]){
      status.innerHTML = letters + " wins.";
    } else if(boards[2] === boards[5] && boards[8] === boards[2]){
      status.innerHTML = letters + " wins.";
    } else if(boards[2] === boards[4] && boards[6] === boards[2]){
      status.innerHTML = letters + " wins"; 
    } else if(boards[3] === boards[4] && boards[5] === boards[3]) {
      status.innerHTML = letters + " wins"; 
    } else if(boards[6] === boards[7] && boards[8] === boards[6]){
      status.innerHTML = letters + " wins"; 
    } 
  } 
}  



var handler = {
  cellButton: function(letterTurn, clickedCell) {
    
    var letter = letterTurn;
    var cell = clickedCell;
    view.replaceEmpty(cell, letter);
    ticTac.checkBoard(letter, cell);
    
    //update board logic array with cell position, change ID of cell to include letter
  }
};

var view = {
  replaceEmpty: function (emptyElement, letters) {
    
    //replace empty cell with x given the cell position
    var cell = emptyElement;
    cell.innerHTML = letters;
  }
};  










  

  



