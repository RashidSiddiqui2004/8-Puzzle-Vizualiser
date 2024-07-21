
export interface GridProps {
    grid: number[][];
}

const Grid: React.FC<GridProps> = ({ grid }) => {
    return (
        <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
            {grid.flat().map((tile, index) => (
                <div key={index} className="w-16 h-16 flex items-center justify-center 
                border border-gray-400 font-bold text-2xl text-raleway">
                    {tile !== 0 ? tile : ''}
                </div>
            ))}
        </div>
    )
}

export default Grid