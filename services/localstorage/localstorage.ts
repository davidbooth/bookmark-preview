import { Bookmark } from '../../components/bookmark/bookmark';

export const getBookmarks = (): Bookmark[] => {
    //Prevent accessing of localstorage when in SSR.
    if (typeof window === 'undefined') {
        return [];
    }

    const json = localStorage.getItem('bookmarks') || '[]';

    try {
        return JSON.parse(json) as Bookmark[];
    } catch (error) {
        return [];
    }
};

export const saveBookmarks = (list: Bookmark[]) => {
    localStorage.setItem('bookmarks', JSON.stringify(list));
};
