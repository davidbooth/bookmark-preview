import { FC } from 'react';
import { useAppDispatch } from '../../services/store/redux-store';
import { removePermanently } from './bookmarksSlice';
import { TrashIcon } from '@heroicons/react/outline';

interface BookmarkDeleteProps {
    id: string;
}

export const BookmarkDelete: FC<BookmarkDeleteProps> = (props) => {
    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch(removePermanently(props.id));
    };

    return (
        <li
            onClick={clickHandler}
            className="bg-red-900 hover:bg-red-700 active:bg-red-800 rounded px-4 cursor-pointer">
            <TrashIcon className="relative top-[-2px] inline w-4 h-4" />
        </li>
    );
};
