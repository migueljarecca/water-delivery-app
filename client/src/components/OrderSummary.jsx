
// This component displays the order summary in the checkout process.
// It includes the items in the cart, their quantities, and the total price.

import { useCart } from "../hooks/useCart"
import { formatPrice } from "../utils/formatters/formatPrice";

export const OrderSummary = () => {

    const { cart, subTotalPrice, shippingCost, priceTotal } = useCart();

    return(
        <>
            <h3 className="order-summary-heading">Tu pedido</h3>
            
            <div className="checkout-review-order">

                <table className="review-order-table">
                    <thead>
                        <tr className="cart-item">
                            <th className="product-name">Producto</th>
                            <th className="product-sub-total">Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cart && cart.length > 0 ? (
                            cart.map(item => (
                                <tr className="cart-item" key={item.id}>
                                    <td className="product-name">
                                        {item.title}&nbsp;
                                        <strong className="product-quantity">×&nbsp;{item.quantity}</strong>
                                    </td>
                                    <td className="product-sub-total">
                                        <span className="price-amount">
                                            <bdi><span className="price-symbol"></span>{formatPrice(item.price * item.quantity)}</bdi>
                                        </span>
                                    </td>
                                </tr>
                        ))
                        ) : (
                            <tr className="cart-item">
                                <td className="product-name">No hay productos en el carrito</td>
                                <td className="product-sub-total">
                                    <span className="price-amount">
                                        <bdi><span className="currency-symbol"></span>{formatPrice(0)}</bdi>
                                    </span>
                                </td>
                            </tr>
                        )}
                    </tbody>

                    <tfoot>
                        <tr className="cart-sub-total">
                            <th className="product-name">Subtotal</th>
                            <td className="product-sub-total">
                                <span className="price-amount">
                                <bdi><span className="currency-symbol"></span>{formatPrice(subTotalPrice)}</bdi>
                                </span>
                            </td>
                        </tr>
                        
                        <tr className="shipping">
                            <th className="product-name">Envío</th>
                            <td className="product-sub-total">
                                <span className="price-amount">
                                    <bdi><span className="currency-symbol"></span>{shippingCost > 0 ? formatPrice(shippingCost  ) : formatPrice(0) }</bdi>
                                </span>
                            </td>
                        </tr>
                        
                        <tr className="order-total">
                            <th className="product-name">Total </th>
                            <td className="product-sub-total">
                                <strong>
                                    <span className="price-amount">
                                        <bdi><span className="currency-symbol"></span>{formatPrice(priceTotal)}</bdi>
                                    </span>
                                </strong>
                            </td>
                        </tr>
                    </tfoot>

                </table>

            </div>
        </>
    )
}