import { FC } from 'react';
import { HeartIcon } from '@heroicons/react/solid';

export const Footer: FC = (props) => {
    return (
        <footer className="text-center text-sm text-gray-400 py-8">
            Copyright 2022
            <br />
            Made with <HeartIcon className="w-4 h-4 inline text-orange-700 align-text-top" /> in the
            Sunshine state.
            <br />
            <a href="https://www.flaticon.com/free-icons/animal" title="animal icons">
                Animal icons created by Freepik - Flaticon
            </a>
        </footer>
    );
};
