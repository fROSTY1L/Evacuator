import { configureStore } from "@reduxjs/toolkit";
import PageReducer from "./PageReducer";

export const store = configureStore({
    reducer: {
        page: PageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;