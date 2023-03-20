import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store'

type searchState = {
    value: string;
};

const initialState: searchState = {
    value: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        onChange: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { onChange } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;
export default searchSlice.reducer;