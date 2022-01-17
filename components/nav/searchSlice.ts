import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchBookmarks } from '../../services/search/search';
import { AppState } from '../../services/store/redux-store';
import { Bookmark } from '../bookmark/bookmark';

interface SearchState {
    isActive: boolean;
    results: Bookmark[];
}

const initialState: SearchState = {
    isActive: false,
    results: [],
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.isActive = action.payload;
        },
        setResults: (state, action) => {
            state.isActive = true;
            state.results = action.payload;
        },
    },
});

export const search = createAsyncThunk('search/bookmarks', (searchTerm: string, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    if (searchTerm === '') {
        dispatch(setActive(false));
        return;
    }

    const state = getState() as AppState;
    const result = searchBookmarks(searchTerm, state.bookmarks.list);
    dispatch(setResults(result));
});

export const { setResults, setActive } = searchSlice.actions;
export const selectResults = (state: AppState) => state.search.results;
export const selectStatus = (state: AppState) => state.search.isActive;
export default searchSlice.reducer;
