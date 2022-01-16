import { FC } from 'react';
import { BookmarkDelete } from './bookmark-delete';

interface BookmarkKeywordsProps {
    keywords: string[] | undefined;
}

export const BookmarkKeywords: FC<BookmarkKeywordsProps> = (props) => {
    let keywords: JSX.Element[] = [];

    if (props.keywords) {
        keywords = props.keywords.map((keyword, i) => {
            return (
                <li key={i}>
                    <span className="bg-pelican-orange text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        {keyword}
                    </span>
                </li>
            );
        });
    }

    return (
        <ul className="flex flex-wrap">
            {keywords}
            <BookmarkDelete />
        </ul>
    );
};
