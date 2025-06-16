import { Routes, Route } from "react-router";
import { Home } from './pages/Home'
import { AboutUs } from "./pages/AboutUs";
import { Products } from "./pages/Products";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { PublicLayout } from "./layouts/PublicLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";

export const AppRoutes = () => {

    return(

        <Routes>
            <Route element={<PublicLayout />}>
                <Route index element={<Home />}/>
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>

            </Route>
            
        </Routes>
    )
}