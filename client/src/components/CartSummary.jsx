import { useEffect } from "react";
import { useCart } from "../hooks/useCart";

export const CartSummary = () => {

    const { 
        subTotalPrice,
        shippingCost,
        priceTotal, 
        handlerCalculateSubTotal, 
        handlerUpdateIncreaseQuantity, 
        handlerUpdateDecreaseQuantity 
    } = useCart();

    useEffect(() => {
        handlerCalculateSubTotal();
    },[handlerUpdateIncreaseQuantity, handlerUpdateDecreaseQuantity]);

    return(
        <div className="cart-summary-container">
        
            <div className="cart-summary-content">
                <div className="cart-summary-div">
                    <span>Subtotal</span>
                    <span>S/. {subTotalPrice}</span>
                </div>

                <div className="cart-summary-div">
                    <span>Envío</span>
                    <span>S/. {shippingCost}</span>
                </div>

                <div className="cart-summary-div">
                    <span>Total</span>
                    <span>S/. {priceTotal}</span>
                </div>
            </div>
            
            {shippingCost > 0 && (
                <span className="cart-summary-delivery">
                    COSTO DE ENVIO S/ {shippingCost} por compra menor a s/ 50
                </span>
            )}
            
            
            <button className="cart-summary-button">Realizar Pedido</button>

            <p>Tienes preguntas? </p>
        </div>
    )
}