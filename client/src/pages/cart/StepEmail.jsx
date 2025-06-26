import { Link, useNavigate } from "react-router-dom"

export const StepEmail = () => {

    const navigate = useNavigate();

    return(
        <>
            <h1>Información de contacto</h1>

            <div className="address-form-container">
                <form action="address-form">
                    <input type="email" />
                </form>
            </div>

            <h1>Dirección de envío</h1>

            <Link to="checkout/address">Siguiente</Link>

        </>
    )
}