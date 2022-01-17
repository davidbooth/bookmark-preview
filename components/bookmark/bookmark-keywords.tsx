import { FC } from 'react';
import { BookmarkDelete } from './bookmark-delete';

interface BookmarkKeywordsProps {
    id: string;
    keywords: string[] | undefined;
}

export const BookmarkKeywords: FC<BookmarkKeywordsProps> = (props) => {
    let keywordElems: JSX.Element[] = [];

    if (props.keywords) {
        keywordElems = props.keywords.map((keyword, i) => {
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
        <ul className="flex flex-wrap gap-y-2 gap-x-1">
            {keywordElems}
            <BookmarkDelete id={props.id} />
        </ul>
    );
};
