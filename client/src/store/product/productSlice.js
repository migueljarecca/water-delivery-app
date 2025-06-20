import { createSlice } from "@reduxjs/toolkit";

const initialProductData = [];

export const productSlice = createSlice({

    name: 'product',
    initialState: {
        products: initialProductData,
    },

    reducers: {
        loadingToProduct: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const { loadingToProduct } = productSlice.actions;

export default productSlice.reducer