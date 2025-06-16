import { Outlet } from "react-router"

export const AdminLayout = () => {

    return(
        <>
        
            <h1>Admin</h1>
            <Outlet />
        </>
    )
}