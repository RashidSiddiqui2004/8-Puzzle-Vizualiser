
import React, { useState } from 'react';
import Slider from './Slider';
import MoveButtons from './MoveButtons';

interface ToolkitProps {
    onStop: () => void;
    initialMaxEpochs: number;
    initialTimeBetweenEpochs: number;
    onMaxEpochsChange: (value: number) => void;
    onTimeBetweenEpochsChange: (value: number) => void;
}

const Toolkit: React.FC<ToolkitProps> = ({
    onStop,
    initialMaxEpochs,
    initialTimeBetweenEpochs,
    onMaxEpochsChange,
    onTimeBetweenEpochsChange
}) => {
    const [maxEpochs, setMaxEpochs] = useState(initialMaxEpochs);
    const [timeBetweenEpochs, setTimeBetweenEpochs] = useState(initialTimeBetweenEpochs);

    const handleMaxEpochsChange = (value: number) => {
        setMaxEpochs(value);
        onMaxEpochsChange(value);
    };

    const handleTimeBetweenEpochsChange = (value: number) => {
        setTimeBetweenEpochs(value);
        onTimeBetweenEpochsChange(value);
    };

    return (
        <div className="p-4 mt-2 rounded shadow-md flex flex-col items-center text-white">
            <MoveButtons label="Stop Search" onClick={onStop} />
            <div className='flex flex-row'>
                <div className='h-auto'>
                    <Slider
                        label="Max Epochs"
                        value={maxEpochs}
                        min={20}
                        max={500}
                        step={1}
                        onChange={handleMaxEpochsChange}
                    />
                </div>
                <div className='h-auto'>
                    <Slider
                        label="Inter-Epoch Time"
                        value={timeBetweenEpochs}
                        min={10}
                        max={5000}
                        step={100}
                        onChange={handleTimeBetweenEpochsChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Toolkit;
