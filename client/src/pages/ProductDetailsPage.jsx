import { useParams } from "react-router-dom"
import { useProduct } from "../hooks/useProduct";
import { useEffect, useState } from "react";
import { ProductDetails } from "../components/ProductDetails";

export const ProductDetailsPage = () => {

    const { products } = useProduct();
    const [ productDetails, setProductDetails ] = useState({});
    const { id } = useParams();



    useEffect(() => {
        if (id) {
            const product = products.find((product => product.id == id));
            setProductDetails(product);
        }
    },[id]);

    // console.log('muchos' + JSON.stringify(products, null, 2))
    // console.log('uno' + JSON.stringify(productDetails, null, 2))

    return(
        <main className="product-details">
            <section className="product-details-section">
                <ProductDetails productDetails={productDetails}/>

            </section>
        </main>
    )
}