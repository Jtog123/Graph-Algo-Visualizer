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


//Create visited matrix
/////////////////////////////////
visited = [];

// Generate the grid of squares
for (let i = 0; i < numRows; i++) {
  visited[i] = [];
  for (let j = 0; j < numCols; j++) {
    visited[i][j] = 0
  }
}

console.log(visited);

// Algo Start
///////////////////////////////////
function startAlgo(currentSquare) {
  console.log("Startig algo");
  console.log(currentSquare);
}

// Set Start Square
///////////////////////////////////

//implement later on right click allow user to change start sqaure


let canSetStart = true;
let startSqaure = null;
let startButton = document.getElementById("start-button");
//startButton.addEventListener("click");

for(let i = 0; i < numRows; i++) {
  for(let j = 0; j < numCols; j++) {
    document.getElementById(`square-${i}-${j}`).onclick = function() {
      if(canSetStart) {
        this.style.backgroundColor = "yellow";
        startSqaure = this;
        canSetStart = false
      }

      console.log(startSqaure);
      console.log(startButton);

      if(canSetStart === false) { // start has been set
        startButton.addEventListener("click", function() {
          startAlgo(startSqaure);
        })
      }
      //need to pass in args???? i and j 

        //if(startButton.onclick) {
         // console.log("Starting the Algo");
        //}
        
      



    }
  }
}



/*
if canSetStart === false
We are ready to statr the algo



/*
// Accessing individual squares
const square_3_5 = document.getElementById("square-3-5");
square_3_5.style.backgroundColor = "green";

// You can also access squares using other methods, such as querySelector
const square_6_7 = document.querySelector("#square-6-7");
square_6_7.style.backgroundColor = "blue";
*/
