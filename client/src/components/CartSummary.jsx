import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatters/formatPrice";

export const CartSummary = ({ subTotalPrice, shippingCost, priceTotal }) => {

    return(
        <div className="cart-summary-content">
        
            <div className="cart-summary-details">
                <div className="summary-sub-total">
                    <span>Subtotal</span>
                    <span>{formatPrice(subTotalPrice)}</span>
                </div>

                <div className="summary-shipping">
                    <span>Envío</span>
                    <span>{formatPrice(shippingCost)}</span>
                </div>

                <hr className="cart-divider"/>

                <div className="summary-total">
                    <span>Total</span>
                    <span>{formatPrice(priceTotal)}</span>
                </div>
            </div>
            
            {shippingCost > 0 && (
                <span className="cart-summary-delivery">
                    Agregue mas produtos para cumplir con el mínimo de compra y obtener el envío gratis.
                    Te falta {formatPrice(50 - subTotalPrice)} para obtener el envío gratis.
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