import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store/redux-store';
import { addViaUrl } from '../bookmark/bookmarksSlice';
import { selectStatus } from '../bookmark/bookmarksSlice';
import { LoadingMessage } from './loadingMessage';
import { InputBar } from './inputBar';

export const LinkInput: FC = (props) => {
    const [urlInput, setUrlInput] = useState('');
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatus);

    const showInput = status === 'idle' || status === 'success';
    const showLoading = status === 'loading';
    const showError = status === 'error';
    const errorMessage = <div>Unable to add bookmark...</div>;

    const urlInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUrlInput(event.target.value);
    };

    const addHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let url = urlInput;
        if (!url) {
            return;
        }
        if (!url.startsWith('http')) {
            url = `https://${url}`;
        }

        dispatch(addViaUrl(url));
        setUrlInput('');
    };

    return (
        <div className="w-fit mx-auto">
            <div
                className={`
                    flex items-center 
                    mt-8 p-4 sm:mx-0
                    divide-x space-x-4 
                    rounded-lg shadow-xl 
                    text-gray-400 divide-gray-700 bg-gray-800
                `}>
                {showInput && (
                    <InputBar
                        onChange={urlInputChangeHandler}
                        onSubmit={addHandler}
                        value={urlInput}
                        isValid={true}
                    />
                )}
                {showLoading && <LoadingMessage />}
                {showError && errorMessage}
            </div>
        </div>
    );
};
