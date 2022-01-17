import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import bookmarksSliceReducer from '../../components/bookmark/bookmarksSlice';
import searchSliceReducer from '../../components/nav/searchSlice';

const store = configureStore({
    reducer: {
        bookmarks: bookmarksSliceReducer,
        search: searchSliceReducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
