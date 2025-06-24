import { createSlice } from "@reduxjs/toolkit";

const initialCartData = [];

export const cartSlice = createSlice({

    name: "cart",
    initialState: {
        cart: initialCartData,
        totalPrice: 0,
    },

    reducers: {
        addToCart: (state, action) => {
            
            // We check if the product is already in the cart
            const productInCartIndex = state.cart.findIndex((item => item.id === action.payload.id));

            // The product is already in the cart → update quantity
            if (productInCartIndex >= 0) {
                state.cart = state.cart.map(item => {
                    if (item.id == action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item;
                })

            // The product is not in the cart → add it    
            } else {
                state.cart = [
                    ...state.cart, {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.cart = [];
        },

        calculateTotal: (state) => {
            state.totalPrice = state.cart.map(item => item.price * item.quantity)
            .reduce((accumulator, currentAccumulator) => accumulator + currentAccumulator, 0);
        },

        updateIncreaseQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id == action.payload) {
                    return {
                        ...item,
                        quantity: quantity + 1
                    }
                }
                return item;
            })
        },

        updateDecreaseQuantity: (state, action) => {
            state.cart = state.cart.map(item => {
                if (item.id == action.payload) {

                    // We reduce the quantity if it is greater than 1
                    if (item.quantity > 1) {
                        return {
                            ...item,
                            quantity: quantity - 1
                        }
                    
                    // if the quantity is 1 we eliminate the product
                    } else {
                        return null;
                    }
                }
            })
        },
    }    

});

export const {

    addToCart,
    removeCart,
    clearCart,
    calculateTotal,
    updateIncreaseQuantity,
    updateDecreaseQuantity,

} = cartSlice.actions;

export default cartSlice.reducer