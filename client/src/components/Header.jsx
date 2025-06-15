import { Logo } from "../assets/icons/logo"

export const Header = () => {

    return(
        <header className="header">

            <a href="/" className="logo" aria-label="Ir a inicio">
                <Logo />
            </a>

            <div className="header-div">
                <nav className="navigation">
                    <ul>
                        <li>QUIENES SOMOS</li>
                        <li>PRODUCTOS</li>
                        <li>PREGUNTAS FRECUENTES</li>
                        <li>CONTACTO</li>
                    </ul>
                </nav>

                
            </div>
        </header>
    )
}