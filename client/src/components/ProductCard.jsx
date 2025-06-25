import { Link } from "react-router-dom"

export const ProductCard = ({ product, handlerAddCart }) => {

    const{ id, img, title, price } = product;

    return(
        <div className="product-card">
            <Link to={"/products/details/" +id}>
                <div className="wrapper-image">
                    <img src={img} alt="" />
                </div>
            </Link>
            
            <div className="wrapper-details">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">Precio S/. {price}</p>
            </div>
            
            <button 
                className="product-card-button"
                onClick={() => handlerAddCart(product)}
                >
                Agregar al carito
            </button>
        </div>
    )
}