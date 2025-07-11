import { Link, NavLink } from "react-router"
import { Logo, ShoppingCart, User } from "../assets/icons/icons"
import { useCart } from "../hooks/useCart";
import { MiniCartModal } from "./MiniCartModal";

export const Header = () => {

    const { cart, showCartTooltip } = useCart();

    return (
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

            <div className="header-wrapper-out">
                <div className="header-wrapper-in">
                    <Link to={"/login"} className="header-icon-link">
                        <User />
                    </Link>
                </div>

                <div className="header-wrapper-in">

                    <Link to={"/cart"} className="header-icon-link">
                        <ShoppingCart />
                        {cart.length > 0 && (
                            <div className="cart-count-wrapper">
                                <span className="cart-count">{cart.length}</span>
                            </div>
                        )}
                    </Link>
                    {showCartTooltip && (
                        <div className="cart-tooltip-wrapper">
                            <MiniCartModal />
                        </div>
                    )}
                </div>

            </div>
        </header>
    )
}