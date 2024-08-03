
const findEmptyCell = (grid: number[][]): { row: number, col: number } | null => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                return { row: i, col: j };
            }
        }
    }
    return null;
};

interface Move {
    newRow: number;
    newCol: number;
    move: string;
}

// we have 4 possible moves => U,D,L,R

const moveGen = (grid: number[][], row: number, col: number): Move[] => {
    const moves: Move[] = [];
    if (row >= 0 && row < grid.length - 1) moves.push({ newRow: row + 1, newCol: col, move: 'down' });
    if (row < grid.length && row > 0) moves.push({ newRow: row - 1, newCol: col, move: 'up' });
    if (col >= 0 && col < grid[0].length - 1) moves.push({ newRow: row, newCol: col + 1, move: 'right' });
    if (col < grid[0].length && col > 0) moves.push({ newRow: row, newCol: col - 1, move: 'left' });
    return moves;
};

const applyMove = (grid: number[][], move: Move): number[][] => {
    const newGrid = grid.map(row => row.slice());
    const emptyCell = findEmptyCell(grid);
    if (!emptyCell) return newGrid; // Shouldn't happen, but added for type safety

    const { row, col } = emptyCell;
    const temp = newGrid[row][col];
    newGrid[row][col] = newGrid[move.newRow][move.newCol];
    newGrid[move.newRow][move.newCol] = temp;
    return newGrid;
};


const isGoalState = (grid: number[][], goalState: number[][]): boolean => {
    return JSON.stringify(grid) === JSON.stringify(goalState);
};

// create a queue and push grid states in the queue.
// pop the front, and use MoveGen() function to get all new states
// just a general BFS algorithm

// to show animated experience to users,
// we also need to show the current state of the grid to user dynamically
// so update the state continuously

const bfsSearch = async (initialGrid: number[][], updateGrid: (grid: number[][]) => void, goalState: number[][], maxEpochs: number, timeBetweenEpochs: number, isStopRef: React.MutableRefObject<boolean>) => {
    const start = JSON.stringify(initialGrid);
    const queue: number[][][] = [initialGrid];
    const visited = new Set([start]);

    while (queue.length > 0 && isStopRef.current === false) {
        const grid = queue.shift()!;
        const emptyCell = findEmptyCell(grid);
        if (!emptyCell) continue;

        const { row, col } = emptyCell;
        const moves = moveGen(grid, row, col);
        --maxEpochs;

        if (maxEpochs === 0) {
            return;
        }

        for (const move of moves) {
            const newGrid = applyMove(grid, move);
            const newGridString = JSON.stringify(newGrid);

            if (!visited.has(newGridString)) {
                visited.add(newGridString);
                queue.push(newGrid);

                // Update the grid state to show the current grid to the user dynamically
                updateGrid(newGrid);

                // Pause to create an animated experience (adjust delay as needed)
                await new Promise(resolve => setTimeout(resolve, timeBetweenEpochs));

                // Check if the goal state is reached
                if (isGoalState(newGrid, goalState)) {
                    return;
                }
            }
        }
    }
};


const dfsSearch = async (initialGrid: number[][], updateGrid: (grid: number[][]) => void, goalState: number[][], maxEpochs: number, timeBetweenEpochs: number, isStopRef: React.MutableRefObject<boolean>) => {
    const stack: number[][][] = [initialGrid];
    const visited = new Set([JSON.stringify(initialGrid)]);

    while (stack.length > 0 && isStopRef.current === false) {
        const grid = stack.pop()!;
        if (isGoalState(grid, goalState)) {
            updateGrid(grid);
            return;
        }

        const emptyCell = findEmptyCell(grid);
        if (!emptyCell) continue;

        --maxEpochs;

        if (maxEpochs === 0) {
            return;
        }

        const { row, col } = emptyCell;
        const moves = moveGen(grid, row, col);

        for (const move of moves) {
            const newGrid = applyMove(grid, move);
            const newGridString = JSON.stringify(newGrid);

            if (!visited.has(newGridString)) {
                visited.add(newGridString);
                stack.push(newGrid);
                updateGrid(newGrid);

                await new Promise(resolve => setTimeout(resolve, timeBetweenEpochs));
            }
        }
    }
};


interface Node {
    grid: number[][];
    cost: number;
    heuristic: number;
    totalCost: number;
}

const manhattanDistance = (grid: number[][], goal: number[][]): number => {
    let distance = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const value = grid[i][j];
            if (value !== 0) {
                for (let m = 0; m < goal.length; m++) {
                    for (let n = 0; n < goal[m].length; n++) {
                        if (goal[m][n] === value) {
                            distance += Math.abs(i - m) + Math.abs(j - n);
                        }
                    }
                }
            }
        }
    }
    return distance;
};

const a_Star_Search = async (initialGrid: number[][], updateGrid: (grid: number[][]) => void, goalState: number[][], maxEpochs: number, timeBetweenEpochs: number, isStopRef: React.MutableRefObject<boolean>) => {
    const priorityQueue: Node[] = [{
        grid: initialGrid,
        cost: 0,
        heuristic: manhattanDistance(initialGrid, goalState),
        totalCost: manhattanDistance(initialGrid, goalState)
    }];

    const visited = new Set([JSON.stringify(initialGrid)]);

    while (priorityQueue.length > 0 && isStopRef.current === false) {
        priorityQueue.sort((a, b) => a.totalCost - b.totalCost);
        const currentNode = priorityQueue.shift()!;
        const { grid, cost } = currentNode;

        if (isGoalState(grid, goalState)) {
            updateGrid(grid);
            return;
        }

        const emptyCell = findEmptyCell(grid);
        if (!emptyCell) continue;
        --maxEpochs;

        if (maxEpochs === 0) {
            return;
        }

        const { row, col } = emptyCell;
        const moves = moveGen(grid, row, col);

        for (const move of moves) {
            const newGrid = applyMove(grid, move);
            const newGridString = JSON.stringify(newGrid);

            if (!visited.has(newGridString)) {
                visited.add(newGridString);
                const newCost = cost + 1;
                const newHeuristic = manhattanDistance(newGrid, goalState);
                priorityQueue.push({
                    grid: newGrid,
                    cost: newCost,
                    heuristic: newHeuristic,
                    totalCost: newCost + newHeuristic
                });

                updateGrid(newGrid);

                await new Promise(resolve => setTimeout(resolve, timeBetweenEpochs));
            }
        }
    }
};

export const algorithms = {
    findEmptyCell, bfsSearch, dfsSearch, a_Star_Search
};