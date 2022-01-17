import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../services/store/redux-store';
import { search } from './searchSlice';

export const Search: FC = (props) => {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        dispatch(search(input));
    }, [dispatch, input]);

    return (
        <div>
            <input
                type="text"
                onChange={inputChangeHandler}
                placeholder="Search"
                value={input}
                className={`
                    absolute right-0 top-0 h-full p-2 
                    w-28 sm:w-64 
                    rounded-xl bg-gray-800 
                    text-lg text-center focus:text-left
                    focus:pl-6 focus:w-full focus:placeholder:text-transparent
                    outline-none
                    transition-all ease-in-out duration-300 sm:duration-500
                `}
            />
        </div>
    );
};
