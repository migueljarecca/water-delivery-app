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
import { StepReview } from "./pages/cart/StepReview";
import { ProductsPage } from "./pages/ProductsPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { StepAddressPage } from "./pages/cart/StepAddressPage";
import { ShippingAddressStep } from "./pages/cart/ShippingAddressStep";
import { StepPaymentPage } from "./pages/cart/StepPaymentPage";

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
                    <Route index element={<ShippingAddressStep />} />

                    <Route path="payment" element={<StepPaymentPage />} />
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