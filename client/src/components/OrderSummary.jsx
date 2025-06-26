
export const OrderSummary = () => {



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
                        <tr className="cart-item">
                            <td className="product-name">
                                Pack Cesta&nbsp;
                                <strong className="product-quantity">×&nbsp;1</strong>
                            </td>
                            <td className="product-sub-total">
                                <span className="price-amount">
                                    <bdi>19,80<span className="price-symbol">€</span></bdi>
                                </span>
                            </td>
                        </tr>
                        <tr className="cart-item">
                            <td className="product-name">
                                Pack Formato Pequeño&nbsp;
                                <strong className="product-quantity">×&nbsp;1</strong>
                            </td>
                            <td className="product-sub-total">
                                <span className="price-amount">
                                    <bdi>7,00<span className="currency-symbol">€</span></bdi>
                                </span>
                            </td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr className="cart-sub-total">
                            <th className="product-name">Subtotal</th>
                            <td className="product-sub-total">
                                <span className="price-amount">
                                <bdi>26,80<span className="currency-symbol">€</span></bdi>
                                </span>
                            </td>
                        </tr>
                        
                        <tr className="shipping">
                            <th className="product-name">Envío</th>
                            <td className="product-sub-total">
                                <span className="price-amount">
                                    <bdi>7,00<span className="currency-symbol">€</span></bdi>
                                </span>
                            </td>
                        </tr>
                        
                        <tr className="order-total">
                            <th className="product-name">Total </th>
                            <td className="product-sub-total">
                                <strong>
                                    <span className="price-amount">
                                        <bdi>26,80<span className="currency-symbol">€</span></bdi>
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