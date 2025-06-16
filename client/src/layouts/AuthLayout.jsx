import { Outlet } from "react-router"
import { TopBanner } from "../components/TopBanner"
import { Header } from "../components/Header"

export const AuthLayout = () => {

    return(
        <>
            <TopBanner />
            <Header />
            
            <h1>AuthLayout</h1>
            <main>
                <Outlet />
            </main>
        </>
    )
}