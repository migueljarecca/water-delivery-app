import { Link } from "react-router-dom";
import { ShoppingCart, XMark } from "../assets/icons/icons";
import { useCart } from "../hooks/useCart";
import { ShopCartCard } from "./ShopCartCard";
import { formatPrice } from "../utils/formatters/formatPrice"

export const MiniCartModal = () => {

    const {
        cart,
        subTotalPrice,
        handlerRemoveCart,
        handlerUpdateIncreaseQuantity,
        handlerUpdateDecreaseQuantity,

        handlerCloseShowCartTooltip,
    } = useCart();

    return (
        <div className="mini-cart">
            <div className="mini-cart-header">
                <h1 className="cart-title">Carro de compras</h1>
                <button onClick={() => handlerCloseShowCartTooltip()} className="mini-cart-close-button">
                    <XMark />
                </button>
            </div>

            <div className="mini-cart-wrapper-in">
                {cart && cart.length > 0 ? (
                    cart.map(product => (
                        <ShopCartCard
                            key={product.id}
                            product={product}
                            handlerRemoveCart={handlerRemoveCart}
                            handlerUpdateIncreaseQuantity={handlerUpdateIncreaseQuantity}
                            handlerUpdateDecreaseQuantity={handlerUpdateDecreaseQuantity} />
                    ))
                ) : (
                    <p className="empty-card-message">No hay productos en el carrito </p>
                )}
            </div>

            <div className="mini-cart-subtotal">
                <hr className="mini-cart-line"/>
                <div className="subtotal-wrapper">
                    <span className="subtotal-label">Subtotal:</span>
                    <span className="subtotal-price">{formatPrice(subTotalPrice)}</span>
                </div>
            </div>   

            <div className="mini-cart-actions">
                <Link to={"/cart"} className="view-cart-link">
                    <span>Ver carrito</span>
                    <ShoppingCart />
                </Link>

                <Link to={"/checkout"} className="checkout-link">
                    <span>Finalizar compra</span>
                </Link> 
            </div>     
               

        </div>
    )
}