import { Link, NavLink } from "react-router"
import { Logo, ShoppingCart, User } from "../assets/icons/icons"

export const Header = () => {

    return(
        <header className="header">

            <NavLink to="/" end className="logo" aria-label="Ir a inicio">
                <Logo />
            </NavLink>

            <div className="header-div">
                <nav className="navigation">
                    <ul>
                        <li><NavLink to={"/about-us"}>Quiénes somos</NavLink></li>
                        <li><NavLink to={"/products"}>Productos</NavLink></li>
                        <li><NavLink to={"/faq"}>Preguntas frecuentes</NavLink></li>
                        <li><NavLink to={"/contact"}>Contacto</NavLink></li>
                    </ul>
                </nav>
            </div>

            <div className="header-icons-container">
                <Link to={"/login"} className="header-icon">
                    <User />
                </Link>
                <Link to={"/cart"} className="header-icon">
                    <ShoppingCart />
                </Link>
            </div>
        </header>
    )
}