//creating a parent element constant
const container = document.querySelector(".container");

//creating a button
const button = document.createElement("button");
const header = document.querySelector(".header");
button.innerText = "Click Me";
button.id = "btn";
header.appendChild(button);

for (let i = 1; i < 257; i++){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);

    grid.addEventListener("mouseenter", (event) => {
        grid.style.backgroundColor = "gold";
    })
}

const container2 = document.querySelector(".container2");

button.addEventListener("click", (event) => {
  let popup = prompt("How many squares per Side for the new grids?");

  let numberOfSquares = popup * popup;

  if (popup <= 100) {
    for (let i = 0; i < numberOfSquares; i++) {
      const grid2 = document.createElement("div");
      grid2.classList.add("grid");
      container2.appendChild(grid2);
      console.log(numberOfSquares);

      container.style.display = "none";

      
      grid2.addEventListener("mouseenter", (event) => {
        grid2.style.backgroundColor = "gold";
      });
    }
  } else {
    alert("100 is the Maximum!");
  }
});
