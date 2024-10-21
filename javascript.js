const container = document.querySelector(".container");
console.log(container);
const gridLength = 16;
const gridWidth = 16;

for (let i = 0; i < gridWidth; i++) {

    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row-div");

    for (let j = 0; j < gridLength; j++) {
        const columnDiv = document.createElement("div");
        columnDiv.setAttribute("class", "grid-div");
        rowDiv.appendChild(columnDiv);
    }

    container.append(rowDiv);
}