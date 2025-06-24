import { Trash } from "../assets/icons/icons";


export const ShopCartCard = ({ product }) => {


    if (!product) {
        return <div>No hay productos en el carrito</div>
    }

    const{ id, img, title, price } = product;

    return(
        <div className="product-cart-card">
            <div className="wrapper-cart-image">
                <img src={img} alt="" />
            </div>
            
            <div className="wrapper-cart-details">
                <h3 className="product-cart-title">{title}</h3>

                <div className="product-cart-quantity">
                        <p>cantidad:</p>
                        <div className="quantity-div">
                            <input type="button" className="quantity-button" value={"-"}></input>
                            <input 
                                type="number" 
                                value={1} 
                                className="quantity"
                                name="quantity"
                                aria-label="Cantidad de productos"
                                min={1}
                                step={1}
                                autoComplete="off" 
                                placeholder=""
                                inputMode="numeric"   
                                >

                            </input>
                            <input type="button" className="quantity-button" value={"+"}></input>
                        </div>
                            
                    </div>
            </div>
            
            <div className="wrapper-cart-price">
                
                <div className="cart-icon-div">
                    <Trash />
                </div>
                <p className="product-cart-price">S/. {price}</p>

            </div>
            
        </div>
    )
}