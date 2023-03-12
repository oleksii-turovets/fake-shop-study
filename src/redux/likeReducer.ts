import { createSlice } from "@reduxjs/toolkit";

type ProductsLike = {
    [id: number]: boolean
}

export const initialState = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers:{}
})

export default likeSlice.reducer