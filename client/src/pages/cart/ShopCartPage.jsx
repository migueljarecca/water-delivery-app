import { Link } from "react-router"
import { useCart } from "../../hooks/useCart"
import { ShopCartCard } from "../../components/ShopCartCard";
import { CartSummary } from "../../components/CartSummary";
import { ArrowLeft } from "../../assets/icons/icons";

export const ShopCartPage = () => {

    const { cart, 
            subTotalPrice,
            shippingCost,
            priceTotal, 
            handlerRemoveCart, 
            handlerUpdateIncreaseQuantity, 
            handlerUpdateDecreaseQuantity, 
        } = useCart();

    return(
        <main className="shop-cart-page">
            <section className="shop-cart-section">
                <div className="card-products-container">
                    <h1 className="cart-title">Carro de compras</h1>

                    <div className="wrapper-card-items">
                        {cart && cart.length > 0 ? (
                            cart.map(product => (
                                <ShopCartCard 
                                    key={product.id} 
                                    product={product} 
                                    handlerRemoveCart={handlerRemoveCart}
                                    handlerUpdateIncreaseQuantity={handlerUpdateIncreaseQuantity}
                                    handlerUpdateDecreaseQuantity={handlerUpdateDecreaseQuantity}/>
                            ))
                        ) : (
                            <p className="empty-card-message">No hay productos en el carrito </p>
                        )}
                    </div>

                    <Link to={"/products"} className="back-to-products-link">
                        <ArrowLeft />
                        <span>Volver a productos</span>
                    </Link>

                </div>

                <div className="cart-summary-container">
                    <h1 className="summary-title">Resumen</h1>

                    <CartSummary 
                        subTotalPrice={subTotalPrice}
                        shippingCost={shippingCost}
                        priceTotal={priceTotal}
                    />
                </div>

           </section>
        </main>
    )
}