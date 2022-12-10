function createDivs() {
  const gridContainer = document.getElementById("container-grid");

  for (i = 0; i < 256; i++) {
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

createDivs();
addHoverListeners();
