const container = document.querySelector(".container");

for (let i = 1; i < 257; i++){
    const grid = document.createElement("div");
    grid.id = "grid";
    container.appendChild(grid);

    grid.addEventListener("mouseenter", (event) => {
        grid.style.backgroundColor = "gold";
    })
}

