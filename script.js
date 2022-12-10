function createDivs() {
  const gridContainer = document.getElementById("container-grid");

  for (i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "div-grid");
    gridContainer.appendChild(newDiv);
  }
}

createDivs();
