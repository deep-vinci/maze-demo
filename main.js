let maze = [[0, 0]];
const mazeMap = document.querySelector(".maze-map");
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
createMaze();
for(let i = 0; i < 10; i++) {
    
    let surroundingCoords = [
        coordsDeterminer(0, -1), 
        coordsDeterminer(1, 0), 
        coordsDeterminer(0, 1), 
        coordsDeterminer(-1, 0)
    ]

    let r = surroundingCoords.filter(arr => arr.every(x => x >= 0))
    // surrounding coords should not be at the already placed maze

    const filteredArray = maze.filter(element => !surroundingCoords.includes(element));

    // console.log(r);
    console.log(filteredArray)

    const randomElement = filteredArray[Math.floor(Math.random() * filteredArray.length)];

    // console.log(randomElement.toString())
    if (randomElement != undefined) {
        document.getElementById(randomElement.toString()).style.backgroundColor = "red";
    }

    maze.push(randomElement)
    // console.log(maze)
} 
