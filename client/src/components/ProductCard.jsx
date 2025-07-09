import { Link } from "react-router-dom"
import { formatPrice } from "../utils/formatters/FormatPrice";

export const ProductCard = ({ product, handlerAddCart }) => {

    const{ id, img, title, slug, price } = product;

    return(
        <div className="product-card">
            <Link to={"/products/details/" +slug}>
                <div className="wrapper-image">
                    <img src={img} alt="" />
                </div>
            </Link>
            
            <div className="wrapper-content">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">Precio {formatPrice(price)}</p>
            </div>
            
            <button 
                className="btn-add-cart"
                onClick={() => handlerAddCart(product)}
                >
                Agregar al carito
            </button>
        </div>
    )
}