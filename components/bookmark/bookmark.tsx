import { FC } from 'react';
import { BookmarkImage } from './bookmark-image';
import { BookmarkKeywords } from './bookmark-keywords';
import { TrashIcon } from '@heroicons/react/solid';
import { BookmarkLink } from './bookmark-link';

export interface Bookmark {
    title: string | undefined;
    description: string | undefined;
    keywords: string[] | undefined;
    url: string;
    previewPhoto: string | undefined;
    screenshot: string | undefined;
}

interface BookmarkProps {
    bookmark: Bookmark;
}

export const Bookmark: FC<BookmarkProps> = (props) => {
    return (
        <div
            className={`
                    max-w-sm bg-gray-800 
                    rounded-lg border border-gray-700
                    shadow-md 
                `}>
            <BookmarkLink url={props.bookmark.url}>
                <BookmarkImage
                    previewPhoto={props.bookmark.previewPhoto}
                    title={props.bookmark.title}
                />
            </BookmarkLink>

            <div className="p-5">
                <BookmarkLink url={props.bookmark.url}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        {props.bookmark.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-400">{props.bookmark.description}</p>
                </BookmarkLink>
                <BookmarkKeywords keywords={props.bookmark.keywords} />
            </div>
        </div>
    );
};
