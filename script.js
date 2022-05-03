// create a div
//use a for loop to fill the row
//use a for loop to fill the column
let row = document.createElement("div");
let blockColumn = document.getElementById("grid");
function addElement() {
  let block = document.createElement("div");
  block.classList.add("gridSquare");
  blockColumn.appendChild(block);
}
for (i = 0; i < 16 * 16; i++) {
  addElement();
}
for (x = 0; x < 16; x++) {
  document.getElementById("grid").appendChild(row);
}

let gridSquare = Array.from(document.getElementsByClassName("gridSquare"));

for (const box of gridSquare)
  box.addEventListener("mouseover", function () {
    this.classList.add("gridSquareHover");
  });
