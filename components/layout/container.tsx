import { FC } from 'react';

export const Container: FC = (props) => {
    return <div className="container mx-auto px-4">{props.children}</div>;
};
