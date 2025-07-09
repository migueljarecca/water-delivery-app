import { useParams } from "react-router-dom"
import { useProduct } from "../hooks/useProduct";
import { useEffect, useState } from "react";
import { ProductDetails } from "../components/ProductDetails";
import { useCart } from "../hooks/useCart";

// This is the ProductDetailsPage component that displays the details of a specific product
// It uses the useParams hook to get the product slug from the URL and fetches the product details from the products list
// It also provides functionality to increase or decrease the quantity of the product and calculates the total price

export const ProductDetailsPage = () => {

    const { products } = useProduct();
    const [ productDetails, setProductDetails ] = useState(null);
    const { handlerAddCart } = useCart();

    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            const product = products.find((product => product.slug == slug));
            if (product) {
                setProductDetails(product);
            } else {
                return setProductDetails(null);
            }
        }
    },[slug, products]);

    if (productDetails === null) {
        return <div>Cargando producto...</div>;
    }

    // console.log('muchos' + JSON.stringify(products, null, 2))
    // console.log('uno' + JSON.stringify(productDetails, null, 2))

    return(
        <main className="product-details">
            <section className="product-details-section">
                <ProductDetails 
                    productDetails={productDetails}
                    handlerAddCart={handlerAddCart}
                    />

            </section>
        </main>
    )
}