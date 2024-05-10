
import Queue from './queue.js';

// Define the grid dimensions
const numRows = 25;
const numCols = 25;


// Get a reference to the grid container
const gridContainer = document.getElementById("container");


// Generate the grid of squares
/////////////////////////////////

for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numCols; j++) {
    // Create a new square element
    const square = document.createElement("div");
    square.classList.add("square");
    
    // Set a unique id for each square
    square.id = `square-${i}-${j}`;
    
    // Add the square to the grid container
    gridContainer.appendChild(square);
  }
}


var grid = gridContainer;



//Create visited matrix
/////////////////////////////////
var visited = [];

// Generate the grid of squares
for (let i = 0; i < numRows; i++) {
  visited[i] = [];
  for (let j = 0; j < numCols; j++) {
    visited[i][j] = false;
  }
}

console.log(visited);


// Set Start Square
///////////////////////////////////

//implement later on right click allow user to change start sqaure


let canSetStart = true;
let startSqaure = {first:null, second:null};
let startButton = document.getElementById("start-button");
//startButton.addEventListener("click");

for(let i = 0; i < numRows; i++) {
  for(let j = 0; j < numCols; j++) {
    document.getElementById(`square-${i}-${j}`).onclick = function() {
      if(canSetStart) {
        //this.style.backgroundColor = "yellow";
        this.style.background = "radial-gradient(#F4F4F4, #FFB30F)";
        //startSqaure = this;
        startSqaure.first = i; startSqaure.second = j;
        canSetStart = false
      }

      console.log(startSqaure);
      console.log(startButton);

      if(canSetStart === false) { // start has been set
        startButton.addEventListener("click", function() {
          startAlgo(startSqaure, 100);
          
        })
      }

    }
  }
}


function startAlgo(currentSquare, delay) {
  let q = new Queue();
  visited[currentSquare.first][currentSquare.second] = true;
  q.enqueue(currentSquare);
  console.log(q);

  let n = numRows;
  let m = numCols;

  function step() {
    if(q.isEmpty()) return;

    let row = q.front().first;
    let col = q.front().second;

    const neighborID = `square-${row}-${col}`;
    const neighbor = document.getElementById(neighborID);
    neighbor.style.background = "radial-gradient(#F4F4F4, #EC4E20)";

    q.dequeue();

    //Neighbors
    for(let deltaR = -1; deltaR <= 1; deltaR++) {
      for(let deltaC = -1; deltaC <= 1; deltaC++) {
        if(Math.abs(deltaR) == Math.abs(deltaC)) {continue;}

        let nRow = row + deltaR;
        let nCol = col + deltaC;

        if(nRow >= 0 && nRow < n &&
          nCol >= 0 && nCol < m &&
          !visited[nRow][nCol] ) {
            visited[nRow][nCol] = true;
            const squareId = `square-${nRow}-${nCol}`;
            const square = document.getElementById(squareId);

            //square.style.backgroundColor = "green";
            square.style.background = "radial-gradient(#F4F4F4, #849324)"; //849324


            q.enqueue({first: nRow, second: nCol});
          }
      }
    }
    setTimeout(step, delay);
  }
  step()

}

