import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/Home'
import { AboutUs } from "./pages/AboutUs";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { PublicLayout } from "./layouts/PublicLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { ShopCartPage } from "./pages/cart/ShopCartPage";
import { StepEmail } from "./pages/cart/StepEmail";
import { StepAddress } from "./pages/cart/StepAddress";
import { StepReview } from "./pages/cart/StepReview";
import { ProductsPage } from "./pages/ProductsPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";

export const AppRoutes = () => {

    return(

        <Routes>
            <Route element={<PublicLayout />}>
                <Route index element={<Home />}/>
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/products/details/:id" element={<ProductDetailsPage />}/>

                <Route path="/cart" element={<ShopCartPage />} />
                    

                <Route path="/checkout" element={<CheckoutPage />}>
                    <Route index element={<StepEmail />} />
                    <Route path="address" element={<StepAddress />} />
                    <Route path="review" element={<StepReview />} />
                </Route>


            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
            </Route>

            
            
        </Routes>
    )
}