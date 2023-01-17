function createDivs(gridSize) {
  const gridContainer = document.getElementById("container-grid");

  let gridUnits = gridSize * gridSize;
  for (i = 0; i < gridUnits; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "div-grid");
    gridContainer.appendChild(newDiv);
  }
}

function addHoverListeners() {
  const divElements = document.querySelectorAll(".div-grid");
  const activateDiv = (element) => {
    element.currentTarget.setAttribute("class", "div-grid-active");
    element.currentTarget.removeEventListener("mouseenter", activateDiv);
  };

  divElements.forEach((element) => {
    element.addEventListener("mouseenter", activateDiv);
  });
}

function resizeGrid() {
  const SIZE_MAX = 72;
  
  const sizeInput = document.getElementById("sizeInput").valueAsNumber;
  console.log(`Resizing grid to ${sizeInput}`);
  if (Number.isInteger(sizeInput) && sizeInput <= SIZE_MAX && sizeInput > 1) {
    const gridContainer = document.getElementById("container-grid");
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${sizeInput}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${sizeInput}, auto)`;
    createDivs(sizeInput);
    addHoverListeners();
  } else {
    const warnSpan = document.getElementById("warnSpan");
    warnSpan.innerText =
      "Validation error. Please enter a whole number between 2 and 72";
  }
}

function resetGrid() {
  const gridContainer = document.getElementById("container-grid");
  const gridNodes = gridContainer.childNodes;

  for (i=gridNodes.length-1; i; i--) {
    let square = gridNodes[i];
    square.setAttribute("class", "div-grid");
  }
}

createDivs(16);
addHoverListeners();
