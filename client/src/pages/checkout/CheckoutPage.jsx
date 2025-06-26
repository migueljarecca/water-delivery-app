import { Outlet } from "react-router-dom"
import { OrderSummary } from "../../components/OrderSummary"


export const CheckoutPage = () => {

    return(
        <main className="checkout">
            <section className="checkout-section">
                <div className="checkout-container-left">
                    <OrderSummary />
                </div>

                <div className="checkout-container-right">
                    <Outlet />
                </div>

            </section>

        </main>
    )
}