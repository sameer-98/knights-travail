const moves = [[-1,2],[1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,1],[2,-1]];
const Node = (row, col, distance) => {

    const getPositionString = () => {
        return `[${row}, ${col}]`;
    }

    return {row, col, distance, getPositionString}
}

function getNeighbors(row, col){
    neighbors = [];

    for (const move of moves){
        const [rowChange, colChange] = move;
        const newRow = row + rowChange;
        const newCol = col + colChange;
        neighbors.push([newRow,newCol]);
    }

    return neighbors;
}

function knightMoves (start, end){
    const queue = [];
    const startNode = Node(start[0], start[1], 0);
    queue.push(startNode);
    
    const visited = new Set();
    while (queue.length > 0){
        //console.log(queue);
        // remove from the queue 
        const node = queue.shift();
        const {row, col, distance} = node;

        // process the node
        if (row === end[0] && col === end[1]){
            return distance;
        }
        visited.add(node.getPositionString());
        //console.log(visited)

        // Add neighbors
        for (const neighbor of getNeighbors(row, col)){
            const [row_neighbor, col_neighbor] = neighbor;
            const neighborNode = Node(row_neighbor, col_neighbor, distance + 1);
            
            if (row_neighbor > 8 || row_neighbor <= 0 || col_neighbor > 8 || col_neighbor <= 0) continue;

            if (visited.has(neighborNode.getPositionString())) continue;

            queue.push(neighborNode);
        }

    }
}
module.exports = knightMoves;
console.log(knightMoves([0,0],[1,2]));
// console.log(getNeighbors(0,0));