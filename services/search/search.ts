import { Bookmark } from '../../components/bookmark/bookmark';

export const searchBookmarks = (searchTerm: string, list: Bookmark[]): Bookmark[] => {
    return list.filter((bookmark) => {
        const searchText = [
            bookmark.title,
            bookmark.description,
            bookmark.url,
            bookmark.keywords?.join(','),
        ].join(' ');
        const searchRegex = new RegExp(searchTerm, 'gi');
        return searchRegex.test(searchText);
    });
};
