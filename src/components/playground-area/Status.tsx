import React from 'react';

interface StatusProps {
    status: 'inProgress' | 'won' | 'lost' | 'paused';
    message: string;
}

const statusStyles: { [key: string]: string } = {
    inProgress: 'text-white',
    won: 'text-white',
    lost: 'text-white', 
};

const Status: React.FC<StatusProps> = ({ status, message }) => {
    return (
        <div className={`p-4 rounded-lg shadow-md text-raleway ${statusStyles[status]}`}>
            <div className="text-xl font-bold">
                {status === 'inProgress' && 'Game In Progress'}
                {status === 'won' && 'Congratulations! You Won!'}
                {status === 'lost' && 'Game Over! You Lost!'} 
            </div>
            <div className="mt-2">
                {message}
            </div>
        </div>
    );
};

export default Status;
