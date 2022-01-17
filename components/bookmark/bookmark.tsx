import { FC } from 'react';
import { BookmarkLink } from './bookmark-link';
import { BookmarkImage } from './bookmark-image';
import { BookmarkKeywords } from './bookmark-keywords';

export interface Bookmark {
    id: string;
    url: string;
    title: string | undefined;
    description: string | undefined;
    keywords: string[] | undefined;
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
                w-96 h-[28rem] hide-scrollbar overflow-y-auto
                bg-gray-800 border-gray-700
                rounded-lg border shadow-md
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
                <BookmarkKeywords id={props.bookmark.id} keywords={props.bookmark.keywords} />
            </div>
        </div>
    );
};
