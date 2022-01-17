import { ChangeEvent, FC, FormEvent } from 'react';
import { Button } from '../ui/button';

interface InputBarProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    value: string;
    isValid: boolean;
}

export const InputBar: FC<InputBarProps> = (props) => {
    const validStyle = 'text-white';
    const invalidStyle = 'text-red-600';

    return (
        <form className="contents" onSubmit={props.onSubmit}>
            <div className="pl-4">
                <input
                    className={`
                        bg-transparent
                        text-lg
                        outline-none
                        w-full sm:w-128
                        ${props.isValid ? validStyle : invalidStyle}
                    `}
                    onChange={props.onChange}
                    value={props.value}
                    type="text"
                    placeholder="https://"></input>
            </div>
            <div className="pl-4">
                <Button type="submit">Add</Button>
            </div>
        </form>
    );
};
