
import { TopBanner } from "../components/TopBanner";
import { Header } from "../components/Header";
import { Outlet } from "react-router"

export const PublicLayout = () => {

    return(
        <>
            <TopBanner />
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}