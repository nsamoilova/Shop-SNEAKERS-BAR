import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [{}]
    },

    reducers: {
        setItemsInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
        }
    }
});

export const { setItemsInCart, deleteItemFromCart } = cardSlice.actions;

export default cardSlice.reducer;