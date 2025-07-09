import { useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

export const CartSummary = ({ subTotalPrice, shippingCost, priceTotal }) => {

    // const {  
    //     handlerCalculateSubTotal, 
    // } = useCart();

    // useEffect(() => {
    //     handlerCalculateSubTotal();
    // },[priceTotal]);

    return(
        <div className="cart-summary-content">
        
            <div className="cart-summary-details">
                <div className="summary-sub-total">
                    <span>Subtotal</span>
                    <span>S/. {subTotalPrice}</span>
                </div>

                <div className="summary-shipping">
                    <span>Envío</span>
                    <span>S/. {shippingCost}</span>
                </div>

                <hr className="cart-divider"/>

                <div className="summary-total">
                    <span>Total</span>
                    <span>S/. {priceTotal}</span>
                </div>
            </div>
            
            {shippingCost > 0 && (
                <span className="cart-summary-delivery">
                    Agregue mas produtos para cumplir con el mínimo de compra y obtener el envío gratis.
                    Te falta s/ {50 - subTotalPrice} para obtener el envío gratis.
                </span>
            )}
            
            
            <Link 
                to={"/checkout"} 
                className={`cart-summary-link ${subTotalPrice <= 0 ? "disabled-link" : ""}`}
            >
                Realizar Pedido
            </Link>

            <p>Tienes preguntas? </p>
        </div>
    )
}