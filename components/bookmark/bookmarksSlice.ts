import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBookmarks, saveBookmarks } from '../../services/localstorage/localstorage';
import { AppState } from '../../services/store/redux-store';
import { Bookmark } from './bookmark';

interface BookmarksState {
    list: Bookmark[];
    status: 'idle' | 'loading' | 'success' | 'error';
}

export const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        list: getBookmarks(),
        status: 'idle',
    } as BookmarksState,
    reducers: {
        add: (state, action) => {
            state.list.unshift(action.payload);
        },
        remove: (state, action) => {
            const index = state.list.findIndex((item) => item.id === action.payload);
            state.list.splice(index, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addViaUrl.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addViaUrl.fulfilled, (state, action) => {
                state.status = 'success';
            })
            .addCase(addViaUrl.rejected, (state, action) => {
                state.status = 'error';
            });
    },
});

export const addViaUrl = createAsyncThunk('bookmarks/addViaUrl', async (url: string, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const { data: linkDetails } = await axios.get(`/api/link-details?url=${url}`);
    linkDetails.id = Math.random().toString(16).replace('0.', '');

    dispatch(add(linkDetails));

    const state = getState() as AppState;
    saveBookmarks(state.bookmarks.list);
});

export const removePermanently = createAsyncThunk(
    'bookmarks/removePermanently',
    (id: string, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        dispatch(remove(id));

        const state = getState() as AppState;
        saveBookmarks(state.bookmarks.list);
    }
);

export const { add, remove } = bookmarksSlice.actions;
export const selectList = (state: AppState) => state.bookmarks.list;
export const selectStatus = (state: AppState) => state.bookmarks.status;
export default bookmarksSlice.reducer;
