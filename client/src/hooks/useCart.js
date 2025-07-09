import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeCart, updateDecreaseQuantity, updateIncreaseQuantity } from "../store/cart/cartSlice";
import { useEffect } from "react";


export const useCart = () => {

    const { cart, shippingCost, subTotalPrice, priceTotal } = useSelector((state => state.cart));

    const dispatch = useDispatch();

        useEffect(() => {
        console.log('carts', cart); // Esto se ejecutará en cada render
        console.log('sub-total-price', subTotalPrice);
        },[cart, subTotalPrice]);

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
        }
    );
};

