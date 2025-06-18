import { useState } from 'react';
import products from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Products = () => {

    const [productsList] = useState(products);

    console.log(JSON.stringify(productsList, null, 2));

    return(
        <main className="products">

            <section className="products-container">
                <div className="products-text">
                    <h2>Compra aquí tu agua. Nosotros te la llevamos a casa.</h2>
                    <p>Con nuestro servicio de reparto de agua no tendrás que preocuparte de nada, 
                        nosotros nos encargamos de que siempre tengas tus botellas de agua cuando las necesites. Con un clic, puedes disfrutar de la pureza y los beneficios de un agua excepcional, lista 
                        para hidratarte cuando más lo necesites.</p>

                    {/* <p></p>     */}
                </div>

                <div className="products-content">
                    {productsList.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>

            </section>
        </main>
    )
}