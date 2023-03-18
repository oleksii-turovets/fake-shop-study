// import { createSlice } from "@reduxjs/toolkit";


import { AnyAction } from "@reduxjs/toolkit"
import { omit } from 'lodash'

// type ProductsCount = {
//     [id: number]: number
// }

// export const initialState: ProductsCount = {
//     1: 3,
//     2: 3,
// }

// export const cartSlice = createSlice({
//     name: 'count',
//     initialState,
//     reducers: {
//         addProductToCart: (state, action) => ({
//             ...state,
//             [action.payload]: (state[action.payload]|| 0) + count,
//         }),
//         removeProductFromCart: (state, action) => (
//             omit(state, [action.payload])
//         ),
//         changeProductQuantity: (state, action) => ({
//             ...state,
//             [action.payload]: count,
//         }),
//     }
// })

// export const {toggleLike} = cartSlice.actions

// export default cartSlice.reducer

type State = {
    [id: number] : number
}

const initialState: State = {
    1: 3,
    2: 3,
}

const cartReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART": 
            return {
                ...state,
                [action.id]: (state[action.id]|| 0) + action.count
            }
        
        case 'REMOVE_PRODUCT_FROM_CART': 
            return omit(state, action.id)
            
        default: 
            return state
    }
}

export default cartReducer