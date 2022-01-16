import { FC } from 'react';

export const Search: FC = (props) => {
    return (
        <div>
            <input
                className={`
                    absolute right-0 top-0 h-full p-2 
                    w-28 sm:w-64 
                    rounded-xl bg-gray-800 text-lg 
                    text-center focus:text-left
                    focus:pl-6 focus:w-full focus:placeholder:text-transparent
                    outline-none
                    transition-all ease-in-out duration-300 sm:duration-500
                `}
                type="text"
                placeholder="Search"
            />
        </div>
    );
};
