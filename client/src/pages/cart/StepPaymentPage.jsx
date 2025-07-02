import { Link } from "react-router-dom";
import { CheckCircle, InformationCircle, Spinner } from "../../assets/icons/icons";

export const StepPaymentPage = () => {

    return (
        <div className="step-payment">
            <div className="step-payment-container">

                <div className="wrapper-payment">
                    <div className="wrapper-payment-title">
                        <h2 className="payment-title">Información de contacto</h2>
                        <div className="wrapper-icons-title">
                            <CheckCircle />
                        </div>
                    </div>

                    <div className="wrapper-info-contact">
                        <p className="address-label">Email</p>
                        <p>miguel.jarecca@gmail.com</p>
                    </div>
                </div>

                <div className="wrapper-payment">
                    <div className="wrapper-payment-title">
                        <h2 className="payment-title">Dirección de envío</h2>
                        <div className="wrapper-icons-title">
                            <CheckCircle />
                        </div>
                    </div>
                    <div className="wrapper-info-contact">
                        <div className="wrapper-info-name">
                            <p>Miguel Teofilo Jarecca Ccallo</p>
                            <Link to={"/checkout"}>Editar</Link>
                        </div>
                        <p>Mz. D - Lte. 120 - Gregorio Albaracin - Tacna - Peru</p>
                        <p>648935156</p>
                    </div>
                    
                </div>

                <div className="wrapper-payment">
                    <div className="wrapper-payment-title">
                        <h2 className="payment-title">Método de pago</h2>
                        <div className="wrapper-icons-title">
                            <CheckCircle /> <InformationCircle /> <Spinner />
                        </div>
                    </div>
                </div>
            </div>
                                
        </div>
    );
}