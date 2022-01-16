import { FC } from 'react';
import { TrashIcon } from '@heroicons/react/outline';

export const BookmarkDelete: FC = (props) => {
    return (
        <li className="bg-red-900 hover:bg-red-700 active:bg-red-800 rounded px-4">
            <TrashIcon className="relative top-[-2px] inline w-4 h-4 cursor-pointer" />
        </li>
    );
};
