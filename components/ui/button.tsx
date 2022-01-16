import { FC } from 'react';

export const Button: FC = (props) => {
    return (
        <button
            type="button"
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
