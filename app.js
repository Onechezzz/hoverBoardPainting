const board = document.querySelector("#board");
const colors = ["#874AB0", "#E68970", "#EB5F84", "#FFDFB7", "#1A91CD"];
const colorPanel = document.querySelector("#panel");
const panelColors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "skyblue",
  "Blue",
  "Indigo",
];
const panelSquares = panelColors.length;
const SQUARES_NUMBER = 500;
let activeColor;

//Simple demonstration of vanilla javascript hover-board application

for (let i = 0; i < panelColors.length + 1; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = panelColors[i];
  colorPanel.append(square);
  square.addEventListener("click", () => {
    activeColor = panelColors[i];
  });
}
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  let color = activeColor;
  if (color == undefined) {
    console.log("here");
    color = getRandomColor();
  }

  console.log("color", color);
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}
function getColor(element) {
  console.log("square", element);
  console.log("activeColor", activeColor);
  let index = element;
  console.log("element", element);
  if (index == undefined) {
    index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
  return element;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
