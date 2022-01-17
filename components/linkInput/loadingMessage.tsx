import { FC } from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';

export const LoadingMessage: FC = (props) => {
    return (
        <div className="text-center">
            <Image
                className="animate-spin"
                src={logo}
                alt="Pelican Logo"
                width={24}
                height={24}
                priority={true}
            />
            <span className="pl-4 align-super text-lg">Loading...</span>
        </div>
    );
};
