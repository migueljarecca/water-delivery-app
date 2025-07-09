import { useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { useProduct } from '../hooks/useProduct';
import { useCart } from '../hooks/useCart';

export const ProductsPage = () => {


    const { getProducts, products } = useProduct();
    const { handlerAddCart } = useCart();

    // console.log(JSON.stringify(productsList, null, 2));

    useEffect(() => {
        console.log('ProductsPage useEffect');
        getProducts();
    },[]);

    return(
        <main className="products-page">

            <section className="intro-section">
                <h2 className="intro-title">Compra aquí tu agua nosotros te la llevamos a casa.</h2>
                <p className='intro-description'>Con nuestro servicio de reparto de agua no tendrás que preocuparte de nada, 
                    nosotros nos encargamos de que siempre tengas tus botellas de agua cuando las necesites. Con un clic, puedes disfrutar de la pureza y los beneficios de un agua excepcional, lista 
                    para hidratarte cuando más lo necesites.</p>
            </section>

            <section>
                <div className="products-section">
                    {products && products.length > 0 ? (
                        products.map(product => (
                            <ProductCard key={product.id} product={product} handlerAddCart={handlerAddCart}/>
                        ))
                    ) : (
                        <p className='empty-message'>No hay productos disponibles</p>
                    )}
                </div>
            </section>

        </main>
    )
}