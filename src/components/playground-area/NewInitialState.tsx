import React from 'react';

interface NewInitialStateProps {
    grid: number[][];
    setgrid: (newgrid: number[][]) => void;
    onSubmit: (newState: number[][]) => void;
    onCancel: () => void;
}

const NewInitialState: React.FC<NewInitialStateProps> = ({ grid, setgrid, onSubmit, onCancel }) => {
    const handleChange = (row: number, col: number, value: string) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue) && newValue >= 0 && newValue <= 8) {
            const updatedGrid = grid.map((r, i) =>
                i === row
                    ? r.map((c, j) => (j === col ? newValue : c))
                    : r
            );
            setgrid(updatedGrid);
        }
    }; 
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(grid);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 p-4">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-4">Set New Initial State</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {grid.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex space-x-2">
                            {row.map((cell, colIndex) => (
                                <input
                                    key={colIndex}
                                    type="number"
                                    min="0"
                                    max="8"
                                    value={cell}
                                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                                    className="w-12 h-12 text-center bg-gray-700 text-white rounded border border-gray-600"
                                />
                            ))}
                        </div>
                    ))}
                    <div className="flex justify-end space-x-4 mt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewInitialState;
