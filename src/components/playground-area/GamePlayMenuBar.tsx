import React, { useState } from 'react';
import Toolkit from './Toolkit';

interface SidebarProps {
    onNewGame: () => void;
    onShuffle: () => void;
    onOpenInitialStateModal: () => void;
    onSolveByBFS: (maxEpochs: number, timeBetweenEpochs: number) => void;
    onSolveByDFS: (maxEpochs: number, timeBetweenEpochs: number) => void;
    onSolveByA_Star: (maxEpochs: number, timeBetweenEpochs: number) => void;
    onReset: () => void;
    grid: number[][]
}

const GamePlayMenuBar: React.FC<SidebarProps> = ({ onNewGame, onOpenInitialStateModal, onReset, onSolveByBFS, onSolveByDFS, onSolveByA_Star }) => {

    const [maxEpochs, setMaxEpochs] = useState(20);
    const [timeBetweenEpochs, setTimeBetweenEpochs] = useState(1000);

    const handleStop = () => {
        console.log('Stop button clicked');
    };

    const handleMaxEpochsChange = (value: number) => {
        setMaxEpochs(value);
    };

    const handleTimeBetweenEpochsChange = (value: number) => {
        setTimeBetweenEpochs(value);
    };


    const [showAIOption, setShowAIOptions] = useState(false);
    return (

        <div className="text-white flex flex-col items-center rounded-2xl">

            <div className='w-35'>
                <Button label="New Game" onClick={onNewGame} />
                {/* <Button label="Shuffle" onClick={onShuffle} /> */}
                <Button label="AI Solver" onClick={() => setShowAIOptions(!showAIOption)} />
                {showAIOption && (
                    <div className="relative">
                        <div className="absolute top-0 left-full ml-2 w-60 text-white flex flex-col rounded-xl shadow-lg *:space-y-2 p-2">
                            <Button label='Choose an Algorithm' isHeader={true}></Button>
                            <Button label="Breadth First Search" onClick={() => { onSolveByBFS(maxEpochs, timeBetweenEpochs) }} />
                            <Button label="Depth First Search" onClick={() => { onSolveByDFS(maxEpochs, timeBetweenEpochs) }} />
                            <Button label="A* Algorithm" onClick={() => { onSolveByA_Star(maxEpochs, timeBetweenEpochs) }} />
                        </div>
                    </div>
                )}

                <Button label="Reset" onClick={onReset} />
                <Button label="Set New State" onClick={onOpenInitialStateModal} />
            </div>

            {showAIOption &&
                <Toolkit
                    onStop={handleStop}
                    initialMaxEpochs={maxEpochs}
                    initialTimeBetweenEpochs={timeBetweenEpochs}
                    onMaxEpochsChange={handleMaxEpochsChange}
                    onTimeBetweenEpochsChange={handleTimeBetweenEpochsChange}
                />
            }

        </div>

    );
};


const Button: React.FC<{ label: string, onClick?: () => void, isHeader?: boolean }> = ({ label, onClick, isHeader }) => {
    return (
        <button
            className={`w-full flex flex-row items-start px-6 py-2 ring-1 ring-gray-800 text-sm
            text-left hover:bg-slate-800 hover:text-slate-50 hover:text-ellipsis font-semibold
             from-neutral-200  to-green-200 rounded-sm ${isHeader ? ' bg-slate-900 italic hover:scale-100' : ' bg-slate-950'}
             hover:scale-105`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default GamePlayMenuBar;
