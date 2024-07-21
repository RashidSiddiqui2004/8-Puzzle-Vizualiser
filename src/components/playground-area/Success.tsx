
import React from 'react';
import success from '../../../public/success.jpeg'
import { TextGenerateEffect } from '../ui/text-generate';
interface SuccessCardProps {
    message: string;
    handleShowSuccess: (value: boolean) => void;
}

const SuccessCard: React.FC<SuccessCardProps> = ({ message, handleShowSuccess }) => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
            <div className="rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center justify-center">
                    <div className="text-green-400 text-2xl font-bold rounded-lg">
                        <img src={success} alt="Success Card" className='rounded-xl' />
                    </div>
                </div>
                <TextGenerateEffect words={message} className='text-center font-semibold' />
            </div>
            <div className=" p-2">
                <div className="flex items-center justify-center">
                    <button className="px-8 py-2 bg-slate-900 text-white 
                    rounded hover:bg-slate-800 hover:scale-105 transition-all focus:outline-none"
                        onClick={() => { handleShowSuccess(false) }}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessCard;
