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
const newBtn = document.querySelector("#newGame");
newBtn.addEventListener("click", function () {
  let count = Number(
    prompt(
      "Please enter the number of squares per side. Number should be between 1 and 100"
    )
  );

  if (count <= 100 && count >= 1) {
    alert(count);
  } else {
    alert("That was not a number. Press New Game again to try again.");
  }
});

const reloadBtn = document.querySelector("#resetGame");
reloadBtn.addEventListener("click", function () {
  let divs = document.querySelectorAll("div");
  for (const each of divs) {
    each.classList.remove("gridSquareHover");
  }
});
