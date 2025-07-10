import { Trash } from "../assets/icons/icons";


export const ShopCartCard = ({ 
    product, 
    handlerRemoveCart,
    handlerUpdateIncreaseQuantity,
    handlerUpdateDecreaseQuantity 
}) => {

    const{ id, img, title, price, quantity } = product;

    return(
        <div className="cart-card">
            <div className="wrapper-cart-image">
                <img src={img} alt="" />
            </div>
            
            <div className="wrapper-cart-content">
                <h3 className="product-cart-title">{title}</h3>

                <div className="product-cart-quantity">
                    <p>cantidad:</p>
                    <div className="quantity-div">
                        <button 
                            type="button" 
                            className="quantity-button"
                            disabled={quantity <= 1}
                            onClick={() => handlerUpdateDecreaseQuantity(id)}>
                                -
                        </button>
                        <span 
                            className="quantity"
                            aria-label="Cantidad de productos">
                            {quantity}
                        </span>
                        <button 
                            type="button" 
                            className="quantity-button" 
                            onClick={() => handlerUpdateIncreaseQuantity(id)}>
                                +
                        </button>
                    </div>          
                </div>
                
            </div>
            
            <div className="wrapper-cart-price">
                
                <div className="cart-icon-div" onClick={() => handlerRemoveCart(id)}>
                    <Trash />
                </div>
                <p className="product-cart-price">S/. {price}</p>

            </div>

            
        </div>
    )
}