import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: ''
}

export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search: (state, action) => {
            state.keyword = action.payload
        }
    }
})
export const { search } = SearchSlice.actions;
export default SearchSlice.reducer;
