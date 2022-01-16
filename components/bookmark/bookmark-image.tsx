/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

interface BookmarkImageProps {
    previewPhoto: string | undefined;
    title: string | undefined;
}

export const BookmarkImage: FC<BookmarkImageProps> = (props) => {
    if (!props.previewPhoto) {
        return <></>;
    }

    return (
        <img className="rounded-t-lg" src={props.previewPhoto} alt={`Preview of ${props.title}`} />
    );
};
