import { FC } from 'react';

interface ButtonProps {
    onClick?: () => void;
    type: 'button' | 'submit';
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <button
            onClick={props.onClick}
            type={props.type}
            className={`
                rounded-lg px-5 py-2.5
                text-white font-medium text-sm text-center
                bg-pelican-orange hover:bg-yellow-600 
                focus:ring-4 focus:ring-yellow-900
            `}>
            {props.children}
        </button>
    );
};
