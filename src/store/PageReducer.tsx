import { createSlice } from "@reduxjs/toolkit"
import { Page } from "../interfaces/interfaces";

const initialState: Page = {
    pageNumber: 1,
    allPages: 0
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.pageNumber = action.payload
        },
        setAllPages: (state, action) => {
            state.allPages = action.payload
        }
        
    },
})

export const { setPage, setAllPages } = pageSlice.actions;
export default pageSlice.reducer