const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => createGrid(prompt("Please enter a size for the grid", 16)))


function createGrid(size){
    let row = 1;
    let column = 1;
    container.innerHTML = '';
    let rows = parseInt(size);
    let celltot = rows * rows;
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;

    for (let i = 1; i <= celltot; i++) {
        //create div element representing cell and give it a "cell" class for css purposes
        let cell = document.createElement('div');
        cell.classList.add("cell");
        cell.style.gridRow = row;
        cell.style.gridColumn = column;
        cell.addEventListener("mouseover", () => cell.style.backgroundColor = "black");
        column += 1;
        if (column === rows + 1) {
          row += 1;
          column = 1;
        }
        container.appendChild(cell);
      }
}

createGrid(64);
