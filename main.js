



// Define the grid dimensions
const numRows = 25;
const numCols = 25;

// Get a reference to the grid container
const gridContainer = document.getElementById("container");

// Generate the grid of squares
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



// Accessing individual squares
const square_3_5 = document.getElementById("square-3-5");
square_3_5.style.backgroundColor = "green";

// You can also access squares using other methods, such as querySelector
const square_6_7 = document.querySelector("#square-6-7");
square_6_7.style.backgroundColor = "blue";
