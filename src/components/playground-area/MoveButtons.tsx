import { ButtonsCard } from "../ui/tailwind-css-buttons";

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

const MoveButtons: React.FC<ButtonProps> = ({ label, onClick }) => {
    return ( 
        <div>
            <ButtonsCard onClick={onClick}>
                <button className="px-4 py-2 rounded-md border 
                 border-neutral-300 bg-neutral-100 text-slate-900 font-semibold
                    text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    {label}
                </button>
            </ButtonsCard>
        </div>
    );
}


export default MoveButtons

