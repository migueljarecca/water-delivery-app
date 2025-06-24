import { Outlet } from "react-router"
import { useCart } from "../../hooks/useCart"
import { ShopCartCard } from "../../components/ShopCartCard";


export const ShopCartPage = () => {

    const { cart } = useCart();
    

    return(
        <main className="shop-cart">
            <section className="shop-cart-section">
                <div className="shop-cart-div-left">
                    <h1>Carro de compras</h1>

                    <div className="shop-card-container">
                        {cart.map(product => (
                            <ShopCartCard key={product.id} product={product}/>
                        ))}
                    </div>

                </div>

                <div className="shop-cart-div-right">
                    <h1>Realizar pedido</h1>
                    <Outlet />

                </div>

           </section>
        </main>
    )
}