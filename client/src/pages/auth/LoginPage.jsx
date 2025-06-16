import { Link } from "react-router"
import { LoginForm } from "../../components/auth/LoginForm"

export const LoginPage = () => {

    return(
        <section className="section-login">
            <h1>Inicia Sesión</h1>

            <div className="container-login">
                <LoginForm />
            </div>

            <div className="container-register">
                <h3>Bienvenido!</h3>
                <p>Si aún no tienes una cuenta registrada lo puedes hacer aqui!</p>

                <Link to="/register"> Registrate</Link>
            </div>
        </section>
    )
}