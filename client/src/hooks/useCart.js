import { useDispatch, useSelector } from "react-redux"
import { addToCart, closeShowCartTooltip, openShowCartTooltip, removeCart, updateDecreaseQuantity, updateIncreaseQuantity } from "../store/cart/cartSlice";
import { useEffect } from "react";


export const useCart = () => {

    const { cart, shippingCost, subTotalPrice, priceTotal, showCartTooltip } = useSelector((state => state.cart));

    const dispatch = useDispatch();

        useEffect(() => {
        console.log('carts', cart); // Esto se ejecutará en cada render
        console.log('tooltip', showCartTooltip); // Esto se ejecutará en cada render
        },[cart, subTotalPrice]);

    const handlerAddCart = (product) => {
        dispatch(addToCart(product));
        dispatch(openShowCartTooltip());
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

    const handlerCloseShowCartTooltip = () => {
        dispatch(closeShowCartTooltip());
    }

    return (
        {   
            cart,
            subTotalPrice,
            shippingCost,
            priceTotal,
            showCartTooltip,

            handlerAddCart,
            handlerRemoveCart,
            handlerUpdateIncreaseQuantity,
            handlerUpdateDecreaseQuantity,

            handlerCloseShowCartTooltip,
        }
    );
};

