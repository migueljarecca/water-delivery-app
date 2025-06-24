import { Link, useNavigate } from "react-router-dom"

export const StepEmail = () => {

    const navigate = useNavigate();

    return(
        <>
            <h1>Email</h1>

            <Link to="checkout/address">Siguiente</Link>

        </>
    )
}