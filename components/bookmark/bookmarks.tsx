import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../services/store/redux-store';
import { Bookmark } from './bookmark';

export const Bookmarks: FC = (props) => {
    const [readyForList, setReadyForList] = useState(false);
    const { bookmarks, search } = useAppSelector((state) => state);

    const list = search.isActive ? search.results : bookmarks.list;

    const listContent = list.map((bookmark) => {
        return <Bookmark bookmark={bookmark} key={bookmark.id} />;
    });

    useEffect(() => {
        //Only render bookmarks on Browser not in SSR.
        setReadyForList(true);
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-y-8 sm:gap-x-4 pt-8">
            {readyForList && listContent}
        </div>
    );
};
