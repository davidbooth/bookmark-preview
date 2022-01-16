import { FC } from 'react';
import { Button } from '../ui/button';

export const LinkInput: FC = (props) => {
    return (
        <div className="w-fit mx-auto">
            <div
                className={`
                flex items-center 
                mt-8 p-4 sm:mx-0
                divide-x space-x-4 
                rounded-lg shadow-xl 
                text-gray-400 divide-gray-700 bg-gray-800
            `}>
                <div className="pl-4 text-sm font-normal">
                    <input
                        className={`
                        bg-transparent
                        text-white text-lg
                        outline-none
                        w-full sm:w-128
                    `}
                        type="text"
                        placeholder="https://"></input>
                </div>
                <div className="pl-4">
                    <Button>Add</Button>
                </div>
            </div>
        </div>
    );
};
