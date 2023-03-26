import { createSlice } from "@reduxjs/toolkit";

type ProductsLike = {
    [id: number]: boolean
}

export const initialState: ProductsLike = {}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    }
})

export const {toggleLike} = likeSlice.actions

export default likeSlice.reducer