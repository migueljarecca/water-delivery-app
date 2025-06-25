import { useDispatch, useSelector } from "react-redux"
import { addToCart, calculateSubTotal, removeCart, updateDecreaseQuantity, updateIncreaseQuantity } from "../store/cart/cartSlice";
import { useEffect } from "react";


export const useCart = () => {

    const cart = useSelector((state => state.cart.cart));
    const subTotalPrice = useSelector((state => state.cart.subTotalPrice));
    const shippingCost = useSelector((state) => state.cart.shippingCost);
    const priceTotal = useSelector((state => state.cart.priceTotal));


    const dispatch = useDispatch();

        useEffect(() => {
        console.log('carts', cart); // Esto se ejecutará en cada render
        console.log('sub-total-price', subTotalPrice);
        });

    const handlerAddCart = (product) => {
        //   console.log('Adding to cart:', product);
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

    const handlerCalculateSubTotal = () => {
        dispatch(calculateSubTotal());
    }


    return (
        {   
            cart,
            subTotalPrice,
            shippingCost,
            priceTotal,

            handlerAddCart,
            handlerRemoveCart,
            handlerUpdateIncreaseQuantity,
            handlerUpdateDecreaseQuantity,
            handlerCalculateSubTotal,
        }
    );
};

