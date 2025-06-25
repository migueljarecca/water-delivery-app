import { useCart } from "../hooks/useCart"


export const CartSummary = () => {

    const { totalPrice } = useCart();

    return(
        <div className="cart-summary-container">
        
            <div className="cart-summary-content">
                <div className="cart-summary-div">
                    <span>Subtotal</span>
                    <span>S/. {totalPrice}</span>
                </div>

                <div className="cart-summary-div">
                    <span>Envío</span>
                    <span>S/. 5</span>
                </div>

                <div className="cart-summary-div">
                    <span>Total</span>
                    <span>S/. 105</span>
                </div>
            </div>

            <span className="cart-summary-delivery">
                COSTO DE ENVIO S/ 5 por compra menor a s/ 50
            </span>
            
            <button className="cart-summary-button">Realizar Pedido</button>

            <p>Tienes preguntas? </p>
        </div>
    )
}