let maze = [[2, 2]];
const mazeMap = document.querySelector(".maze");
let width = 27;

const createMaze = () => {

    mazeMap.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    mazeMap.style.gridTemplateRows = `repeat(${width}, 1fr)`;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < width; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `${j},${i}`;

            mazeMap.appendChild(cell);
        }
    }
};

const coordsDeterminer = (xAdd, yAdd) => {
    return [Number(maze.at(-1)[0]) + xAdd, Number(maze.at(-1)[1]) + yAdd]
}

// let topCoords = [maze.at(-1)[0], maze.at(-1)[1]]
// console.log(coordsDeterminer(1, 0))
for (let index = 0; index < 10; index++) {
    
    let surroundingCoords = [
        coordsDeterminer(0, -1), 
        coordsDeterminer(1, 0), 
        coordsDeterminer(0, -1), 
        coordsDeterminer(-1, 0)
    ]

    console.log(surroundingCoords)
} 

// {
//     let surroundingCoords = [
//         coordsDeterminer(0, -1), 
//         coordsDeterminer(1, 0), 
//         coordsDeterminer(0, -1), 
//         coordsDeterminer(-1, 0)
//     ]

//     let filteredCoords = surroundingCoords.filter(coords => {
//         return coords.every(value => value >= 0);
//       });
      
//       console.log(filteredCoords);
//       }