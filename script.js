function createDivs() {
  const gridContainer = document.getElementById("container-grid");

  for (i = 0; i <= 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "div-grid");
    gridContainer.appendChild(newDiv);
  }
}

createDivs();
