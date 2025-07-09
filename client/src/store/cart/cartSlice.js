import { createSlice } from "@reduxjs/toolkit";

const initialCartData = [];

const calculatePriceTotal = (state) => {
        state.subTotalPrice = state.cart.map(item => item.price * item.quantity)
        .reduce((acc, curr) => acc + curr, 0);

        state.shippingCost = state.subTotalPrice >= 50 ? 0 : 5;
        state.priceTotal = state.subTotalPrice  + state.shippingCost;
}

export const cartSlice = createSlice({

    name: "cart",
    initialState: {
        cart: initialCartData,
        subTotalPrice: 0,
        shippingCost: 0,
        priceTotal: 0,
    },

    reducers: {
        addToCart: (state, action) => {

            // We check if the quantity is defined in the action payload
            const newQuantity = action.payload.quantity !== undefined ? 
                   action.payload.quantity : 
                   1;
            
            // We check if the product is already in the cart
            const productInCartIndex = state.cart.findIndex((item => item.id === action.payload.id));

            // The product is already in the cart → update quantity
            if (productInCartIndex >= 0) {
                state.cart = state.cart.map(item => {
                    if (item.id == action.payload.id) {
                        return {
                            ...item,
                            quantity: newQuantity
                        }
                    }
                    return item;
                })

            // The product is not in the cart → add it    
            } else {
                state.cart = [
                    ...state.cart, {
                        ...action.payload,
                        quantity: newQuantity,
                    }
                ]
            }
            calculatePriceTotal(state);
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            calculatePriceTotal(state);
        },

        clearCart: (state) => {
            state.cart = [];
            calculatePriceTotal(state);
        },

        updateIncreaseQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id == action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
            calculatePriceTotal(state);
        },

        updateDecreaseQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id == action.payload) {

                    // We reduce the quantity if it is greater than 1
                    if (item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    
                    // if the quantity is 1 we eliminate the product
                    } else {
                        return null;
                    }
                }
                return item;
            }).filter(item => item !== null)
            calculatePriceTotal(state);
        },

    }    

});

export const {

    addToCart,
    removeCart,
    clearCart,
    updateIncreaseQuantity,
    updateDecreaseQuantity,

} = cartSlice.actions;

export default cartSlice.reducer