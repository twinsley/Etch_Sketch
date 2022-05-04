let count = 90;
let row = document.createElement("div");
let blockColumn = document.getElementById("grid");

function addElement() {
  let block = document.createElement("div");
  block.classList.add("gridSquare");
  blockColumn.appendChild(block);
}

function boxCalc() {
  let size = 900 / count;

  let heights = document.createElement("style");
  heights.innerHTML = `.gridSquare { width: ${size}px;
        height: ${size}px;
    `;
  document.body.appendChild(heights);
  let gridSquare = Array.from(document.getElementsByClassName("gridSquare"));

  for (const box of gridSquare)
    box.addEventListener("mouseover", function () {
      this.classList.add("gridSquareHover");
    });
}

let blocks = document.getElementsByClassName("gridSquare");
for (const each of blocks) {
  each.setAttribute("style", `width:${size}`);
  each.setAttribute("style", `height:${size}`);
}

const start = function () {
  for (i = 0; i < count * count; i++) {
    addElement();
  }
};
start();
let gridSquare = Array.from(document.getElementsByClassName("gridSquare"));

for (const box of gridSquare)
  box.addEventListener("mouseover", function () {
    this.classList.add("gridSquareHover");
  });
const newBtn = document.querySelector("#newGame");
newBtn.addEventListener("click", function () {
  count = Number(
    prompt(
      "Please enter the number of squares per side. Number should be between 1 and 100"
    )
  );

  if (count <= 100 && count >= 1) {
    blockColumn.replaceChildren();
    start();
    boxCalc();
  } else {
    alert(
      "That was not a number between 1 and 100. Press New Game again to try again."
    );
  }
});

const reloadBtn = document.querySelector("#resetGame");
reloadBtn.addEventListener("click", function () {
  let divs = document.querySelectorAll("div");
  for (const each of divs) {
    each.classList.remove("gridSquareHover");
  }
});

//calculate box size to fit the input 'count' into 900 px.
//change height and width styles to match
