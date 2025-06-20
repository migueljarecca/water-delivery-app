    import { useDispatch, useSelector } from "react-redux"
    import { loadingToProduct } from "../store/product/productSlice";
    import productsData from "../data/productsData";

    export const useProduct = () => {

        const products = useSelector((state)  => state.product.products); 
        const dispatch = useDispatch();

        // console.log('products ' + products);

        const getProducts = async () => {
            dispatch(loadingToProduct(productsData))
        }

        return(
            { 
                products,
                getProducts
            }
        )

    }


