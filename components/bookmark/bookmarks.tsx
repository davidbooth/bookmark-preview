import { FC, useEffect, useState } from 'react';
import { Bookmark } from './bookmark';

export const Bookmarks: FC = (props) => {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

    useEffect(() => {
        const bookmarksJson = localStorage.getItem('bookmarks');
        if (bookmarksJson) {
            const bookmarks = JSON.parse(bookmarksJson) as Bookmark[];
            bookmarks.reverse();
            setBookmarks(bookmarks);
        }
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-y-8 sm:gap-y-2 sm:gap-x-4 pt-8">
            {bookmarks.map((bookmark, i) => {
                return <Bookmark bookmark={bookmark} key={i} />;
            })}
        </div>
    );
};
