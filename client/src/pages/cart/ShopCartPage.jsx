import { Link, Outlet } from "react-router"
import { useCart } from "../../hooks/useCart"
import { ShopCartCard } from "../../components/ShopCartCard";
import { CartSummary } from "../../components/CartSummary";


export const ShopCartPage = () => {

    const { cart, 
            handlerRemoveCart, 
            handlerUpdateIncreaseQuantity, 
            handlerUpdateDecreaseQuantity, 
        } = useCart();
    

    return(
        <main className="shop-cart">
            <section className="shop-cart-section">
                <div className="shop-cart-div-left">
                    <h1>Carro de compras</h1>

                    <div className="shop-card-container">
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
                            <p>No hay productos en el carrito </p>
                        )}
                    </div>

                    <Link to={"/products"}>Seguir comprando</Link>

                </div>

                <div className="shop-cart-div-right">
                    <h1>Resumen</h1>

                    <CartSummary />


                    {/* <Outlet /> */}

                </div>

           </section>
        </main>
    )
}