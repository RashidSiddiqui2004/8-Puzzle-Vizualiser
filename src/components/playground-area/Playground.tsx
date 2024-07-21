import { useEffect, useState } from "react";
import Grid from "./Grid"
import MoveButtons from "./MoveButtons"
import GamePlayMenuBar from "./GamePlayMenuBar";
import { algorithms } from "../algorithms/algorithms";
import SuccessCard from "./Success";
import { Link } from "react-router-dom";
import { FaPlaystation } from "react-icons/fa";
import NewInitialState from "./NewInitialState";

const Playground = () => {

    const goalState = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
    ];

    const initialGridEasy = [
        [1, 2, 3],
        [4, 6, 7],
        [0, 5, 8]
    ];

    const initialGridHard = [
        [1, 3, 5],
        [4, 0, 6],
        [7, 8, 2]
    ];

    const [error, setError] = useState<string | null>(null);

    const isGoalState = (grid: number[][], goalState: number[][]): boolean => {
        return JSON.stringify(grid) === JSON.stringify(goalState);
    };

    const [showModal, setShowModal] = useState(false);
    const [initialState, setInitialState] = useState<number[][]>([
        [1, 2, 3],
        [4, 6, 7],
        [0, 5, 8]
    ]);

    const handleMove = (direction: string) => {
        const emptyCell = algorithms.findEmptyCell(initialState);
        if (!emptyCell) {
            setError('No empty cell found!');
            return;
        }

        const { row, col } = emptyCell;
        let newRow = row;
        let newCol = col;

        switch (direction) {
            case 'up':
                newRow = row - 1;
                break;
            case 'down':
                newRow = row + 1;
                break;
            case 'left':
                newCol = col - 1;
                break;
            case 'right':
                newCol = col + 1;
                break;
            default:
                setError('Invalid direction!');
                return;
        }

        if (newRow < 0 || newRow >= initialState.length || newCol < 0 || newCol >= initialState[0].length) {
            setError('Move is out of bounds!');
            return;
        }

        const newGrid = initialState.map(row => row.slice());
        newGrid[row][col] = initialState[newRow][newCol];
        newGrid[newRow][newCol] = 0;
        setInitialState(newGrid);
        setError(null);

        setTimeout(() => {
            if (isGoalState(newGrid, goalState)) {
                setShowSuccess(true);
            }

        }, 1000);
    };

    const cheer = "Keep it Up! You can do it 😊";

    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'u':
                handleMove('up');
                break;
            case 'l':
                handleMove('left');
                break;
            case 'r':
                handleMove('right');
                break;
            case 'd':
                handleMove('down');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleNewGame = () => {
        setInitialState(initialGridEasy);
    };

    const handleShuffle = () => {
        setInitialState(initialGridHard);
    };

    const handleSolveByBFS = (maxEpochs: number, timeBetweenEpochs: number) => {
        algorithms.bfsSearch(initialState, setInitialState, goalState, maxEpochs, timeBetweenEpochs);
    };
    const handleSolveByDFS = (maxEpochs: number, timeBetweenEpochs: number) => {
        algorithms.dfsSearch(initialState, setInitialState, goalState, maxEpochs, timeBetweenEpochs);
    };
    const handleSolveByA_Star = (maxEpochs: number, timeBetweenEpochs: number) => {
        algorithms.a_Star_Search(initialState, setInitialState, goalState, maxEpochs, timeBetweenEpochs);
    };

    const handleReset = () => {
        setInitialState(initialGridEasy);
        setError(null);
    };

    const [showSuccess, setShowSuccess] = useState(false);
    const successMessage = "Congratulations! You have successfully completed the 8-puzzle problem.";

    // const [gameStatus, setGameStatus] = useState<'inProgress' | 'won' | 'lost' | 'paused'>('inProgress');
    // const [statusMessage, setStatusMessage] = useState<string>('Let\'s start the game!');

    // const handleStatusChange = (status: 'inProgress' | 'won' | 'lost', message: string) => {
    //     setGameStatus(status);
    //     setStatusMessage(message);
    // };


    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleSubmit = (newState: number[][]) => {
        setInitialState(newState);
        handleCloseModal();
    };

    return (
        <div className="relative text-raleway">

            {error ?
                <div className="text-red-500 font-semibold flex justify-normal  ml-[35vw]
                 mb-2 bg-slate-950 py-3 px-16 rounded-3xl text-xs
                 w-fit text-center items-center">{error}</div> :
                <div className="text-white font-semibold flex justify-normal ml-[35vw]
                 mb-2 bg-slate-950 py-3 px-16 rounded-3xl text-xs
                 w-fit text-center items-center">{cheer}</div>
            }
            {showSuccess && (
                <div className="h-screen flex items-center justify-center z-20 absolute text-center mx-[20vw]">
                    <SuccessCard message={successMessage} handleShowSuccess={setShowSuccess} />
                </div>
            )}

            {showModal && (
                <NewInitialState onSubmit={handleSubmit} onCancel={handleCloseModal} grid={initialState} setgrid={setInitialState} />
            )}


            <Link to={'/8-puzzle-game-about'} className="fixed right-5 top-4 flex gap-1"><FaPlaystation className="text-4xl"></FaPlaystation><span className="text-sm mt-0">Know More</span></Link>


            <div
                className={`mt-10 h-full grid grid-cols-6 -z-10 ${showSuccess ? 'blur-sm' : ''}`}>

                <div className="col-span-2">
                    <GamePlayMenuBar
                        onNewGame={handleNewGame}
                        onShuffle={handleShuffle}
                        onSolveByBFS={handleSolveByBFS}
                        onOpenInitialStateModal={handleOpenModal}
                        onSolveByDFS={handleSolveByDFS}
                        onSolveByA_Star={handleSolveByA_Star}
                        onReset={handleReset}
                        grid={initialState} />
                </div>

                <div className="col-span-2">
                    <Grid grid={initialState} />
                </div>

                <div className="mt-6 gap-0 max-w-[20vw] col-span-2">
                    <div>
                        <MoveButtons label="Up" onClick={() => handleMove('up')} />
                    </div>
                    <div className="grid grid-cols-3 gap-x-0">
                        <MoveButtons label="Left" onClick={() => handleMove('left')} />
                        <MoveButtons label="Down" onClick={() => handleMove('down')} />
                        <MoveButtons label="Right" onClick={() => handleMove('right')} />
                    </div>
                </div>

            </div>

            {/* <Status status={gameStatus} message={statusMessage} /> */}
        </div>
    )
}

export default Playground