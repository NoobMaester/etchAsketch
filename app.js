//creating a parent element constant
const container = document.querySelector(".container");

//creating a button
const button = document.createElement("button");
const header = document.querySelector(".header")
button.innerText = "Click Me";
button.id = "btn";
header.appendChild(button);

for (let i = 1; i < 257; i++){
    const grid = document.createElement("div");
    grid.id = "grid";
    container.appendChild(grid);

    grid.addEventListener("mouseenter", (event) => {
        grid.style.backgroundColor = "gold";
    })
}






