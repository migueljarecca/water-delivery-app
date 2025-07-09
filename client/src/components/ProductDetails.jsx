import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatters/FormatPrice";
import { useState } from "react";

export const ProductDetails = ({ productDetails, handlerAddCart }) => {

    const [localQuantity, setLocalQuantity] = useState(1);

    const{ id, img, title, price, slug } = productDetails;

    // 1. Generate the message for WhatsApp
    const whatsappMessage = `¡Hola! Me gustaría comprar el siguiente producto:

        *${title}*
        Link: ${`https://mitienda.com/products/details/`}${slug}
        Cantidad: ${localQuantity}
        Precio unitario: ${formatPrice(price)}
        Total: ${formatPrice(price * localQuantity)}

        ¡Gracias!`;

    // 2. Encode the message to URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // 3. Create the WhatsApp link
    const whatsappLink = `https://web.whatsapp.com/send?phone=51970449496&text=${encodedMessage}&app_absent=0`;

    return(
        <div className="product-details-container">
            <div className="wrapper-image">
                <img src={img} alt="" />
            </div>

            <article className="product-details-article">
                <div className="wrapper-details">
                    <h2 className="product-title">{title}</h2>
                    <h3 className="product-price">{formatPrice(price)}</h3>
                </div>

                <div className="product-details-quantity">
                    <p>cantidad</p>
                    <div className="quantity-div">
                        <button 
                                type="button" 
                                className="quantity-button"
                                disabled={localQuantity <= 1}
                                onClick={() => setLocalQuantity(prev => Math.max(prev - 1, 1))}>
                                    -
                            </button>
                            <span 
                                className="quantity"
                                aria-label="Cantidad de productos">
                                {localQuantity}
                            </span>
                            <button 
                                type="button" 
                                className="quantity-button" 
                                onClick={() => setLocalQuantity(prev => prev + 1)}>
                                    +
                            </button>
                    </div>
                         
                </div>
                    
                <div className="product-details-div-link">
                    <a 
                        className="link-whats-app"
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Pedir por WhatsApp
                    </a>

                    <button 
                        className="btn-add-cart"
                        onClick={() => handlerAddCart({
                            ...productDetails, 
                            quantity: localQuantity
                        })}
                    >
                        Agregar al carito
                    </button>
                </div>
                
            </article>
        </div>
    )
}