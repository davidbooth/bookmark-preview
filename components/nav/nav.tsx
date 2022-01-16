import { FC } from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';
import { Search } from './search';

export const Nav: FC = () => {
    return (
        <nav
            className={`
                relative mt-4 px-2 sm:px-4 py-2.5
                bg-gray-700 drop-shadow-xl
                border-pelican-orange border-2 rounded-xl
            `}>
            <div className="flex justify-between">
                <div className="flex">
                    <Image src={logo} alt="Pelican Logo" width={48} height={48} priority={true} />
                    <span className="pl-4 self-center text-2xl font-semibold">Pelican</span>
                </div>

                <Search />
            </div>
        </nav>
    );
};
