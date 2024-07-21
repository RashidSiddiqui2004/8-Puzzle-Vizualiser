
import React from 'react';

interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ label, value, min, max, step, onChange }) => {
    return (
        <div className="w-full my-4">
            <label className="block text-white text-sm font-semibold mb-2 text-raleway">{label}</label>
            <input
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full"
            />
            <div className="text-white text-sm text-center mt-2 font-semibold text-raleway">{value}</div>
        </div>
    );
};

export default Slider;
