import { Link } from "react-router-dom";
import { ShoppingCart } from "../assets/icons/icons";
import { useCart } from "../hooks/useCart";
import { ShopCartCard } from "./ShopCartCard";

export const MiniCartModal = () => {

    const {
        cart,
        handlerRemoveCart,
        handlerUpdateIncreaseQuantity,
        handlerUpdateDecreaseQuantity,

        handlerCloseShowCartTooltip,
    } = useCart();

    return (
        <div className="mini-cart">
            <h1 className="cart-title">Carro de compras</h1>

            <div className="wrapper-card-items">
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

            <button onClick={() => handlerCloseShowCartTooltip()}>Cerrar</button>

            <Link to={"/cart"} className="header-icon-link">
                <span>Ver carrito completo</span>
                <ShoppingCart />
            </Link>

        </div>
    )
}