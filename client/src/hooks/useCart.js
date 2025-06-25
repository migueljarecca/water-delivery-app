import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeCart, updateDecreaseQuantity, updateIncreaseQuantity } from "../store/cart/cartSlice";
import { useEffect } from "react";


export const useCart = () => {

    const cart = useSelector((state => state.cart.cart));
    const totalPrice = useSelector((state => state.cart.totalPrice));


    const dispatch = useDispatch();

    // useCart.js - Ejemplo problemático:
        useEffect(() => {
        console.log('carts', cart); // Esto se ejecutará en cada render
        console.log('total-price', totalPrice);
        }); // ← Falta array de dependencias

    const handlerAddCart = (product) => {
          console.log('Adding to cart:', product); // Solo un log aquí

        dispatch(addToCart(product));
    }

    const handlerRemoveCart = (id) => {
        dispatch(removeCart(id));
    }

    const handlerUpdateIncreaseQuantity = (id) => {
        dispatch(updateIncreaseQuantity(id))

    }

    const handlerUpdateDecreaseQuantity = (id) => {
        dispatch(updateDecreaseQuantity(id));
    }


    return (
        {   
            cart,
            totalPrice,

            handlerAddCart,
            handlerRemoveCart,
            handlerUpdateIncreaseQuantity,
            handlerUpdateDecreaseQuantity,
        }
    );
};

