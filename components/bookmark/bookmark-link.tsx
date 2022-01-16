import { FC } from 'react';

interface BookmarkLinkProps {
    url: string;
}

export const BookmarkLink: FC<BookmarkLinkProps> = (props) => {
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
};
