import { Link } from "react-router-dom";


export const ProductDetails = ({ productDetails }) => {

    if (!productDetails) {
        return <div>No hay detalles del producto</div>
    }

    const{ id, img, title, price } = productDetails;

    return(
        <div className="product-details-container">
            <div className="wrapper-image">
                <img src={img} alt="" />
            </div>

            <article className="product-details-article">
                <div className="wrapper-details">
                    <h2 className="product-title">{title}</h2>
                    <h3 className="product-price">S/. {price}</h3>
                </div>

                <div className="product-details-quantity">
                    <p>cantidad</p>
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
                    
                <div className="product-details-div-link">
                    <Link className="link-whats-app">
                        Pedir por WhatsApp
                    </Link>

                    <Link to={"/cart"} className="link-cart">
                        Agregar al carrito
                    </Link>
                </div>
                
            </article>
        </div>
    )
}