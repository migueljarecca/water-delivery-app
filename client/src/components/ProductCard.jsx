
export const ProductCard = ({ product }) => {

    return(
        <div className="product-card">
            <div className="wrapper-image">
                <img src={product.img} alt="" />
            </div>
            
            <div className="wrapper-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">Precio S/. {product.price}</p>
            </div>
            
            <button className="product-card-button">
                Agregar al carito
            </button>
        </div>
    )
}