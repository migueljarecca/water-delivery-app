import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../store/cart/cartSlice";
import { useEffect } from "react";


export const useCart = () => {

    const cart = useSelector((state => state.cart.cart));

    const dispatch = useDispatch();

    // useCart.js - Ejemplo problemático:
        useEffect(() => {
        console.log('carts', cart); // Esto se ejecutará en cada render
        }); // ← Falta array de dependencias

    const handlerAddCart = (product) => {
          console.log('Adding to cart:', product); // Solo un log aquí

        dispatch(addToCart(product));
    }


    return (
        {   
            cart,

            handlerAddCart,
        }
    );
};

