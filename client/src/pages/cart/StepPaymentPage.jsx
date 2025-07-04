import { Link } from "react-router-dom";
import { CheckCircle, InformationCircle, Spinner } from "../../assets/icons/icons";
import { CardValidateForm } from "../../utils/CardValidateForm";
import { useState } from "react";

const initialPaymentForm = {
    cardNumber: "",
    cardName: "",
    cardExpiration: "",
    cardCvv: "",
}

export const StepPaymentPage = () => {

    const [cardForm, setCardForm] = useState(initialPaymentForm);
    const [cardErrors, setCardErrors] = useState({});

    const { cardNumber, cardName, cardExpiration, cardCvv } = cardForm;

    const onChangeCardForm = (e) => {
        const { name, value } = e.target;
        setCardForm({
            ...cardForm,
            [name]: value
        });
    }

    const onSubmitCardForm = (e) => {
        e.preventDefault();

        const errors = CardValidateForm(cardForm);

        if (Object.keys(errors).length > 0) {
            setCardErrors(errors);
            return;
        }
        
        console.log(" cardForm submitted", cardForm);
    }    

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
                    <p className="payment-description">
                        Elige la forma de pago de su pedido.
                    </p>
                </div>


                    <div className="wrapper-payment">
                        <div className="input-check-group">
                            <input 
                                className="input-check"
                                type="checkbox"
                                id="payment-card" 
                            />
                            <label htmlFor="payment-card" className="payment-label">Pago con tarjeta</label>
                        </div>
                        <div className="input-check-group">
                            <input 
                                className="input-check"
                                type="checkbox"
                                id="payment-cash" 
                            />
                            <label htmlFor="payment-cash" className="payment-label">Pago en efectivo</label>   
                        </div>
                    </div>

                <form className="card-form" onSubmit={onSubmitCardForm}>
                    <div className="wrapper-card">
                        <div className="input-group">
                            <label htmlFor="card-number" className="card-label">Número de tarjeta</label>
                            <input 
                                className="input-card"
                                type="number"
                                name="card-number"
                                id="card-number" 
                                value={cardNumber}
                                onChange={onChangeCardForm}
                                placeholder="1234 5678 9012 3456"
                                autoComplete="off"
                            />
                            {cardErrors && (
                                <div className="card-error-message" role="alert">
                                    <span>{cardErrors.cardNumber}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="wrapper-card">
                        <div className="input-group">
                            <label htmlFor="card-name" className="card-label">Nombre en la tarjeta</label>
                            <input 
                                className="input-card"
                                type="text"
                                name="card-name"
                                id="card-name" 
                                value={cardName}
                                onChange={onChangeCardForm}
                                placeholder="Nombre del titular"
                                autoComplete="off"
                            />
                            {cardErrors && (
                                <div className="card-error-message" role="alert">
                                    <span>{cardErrors.cardName}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="wrapper-card">
                        <div className="form-row">
                            <div className="input-group">
                                <label htmlFor="card-expiration" className="card-label">Fecha de expiración</label>
                                <input 
                                    className="input-card"
                                    type="text"
                                    name="card-expiration"
                                    id="card-expiration" 
                                    value={cardExpiration}
                                    onChange={onChangeCardForm}
                                    placeholder="MM/AA"
                                    autoComplete="off"
                                />
                                {cardErrors && (
                                    <div className="card-error-message" role="alert">
                                        <span>{cardErrors.cardExpiration}</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="input-group">
                                <label htmlFor="card-cvv" className="card-label">CVV</label>
                                <input 
                                    className="input-card"
                                    type="text"
                                    name="card-cvv"
                                    id="card-cvv" 
                                    value={cardCvv}
                                    onChange={onChangeCardForm}
                                    placeholder="123"
                                    autoComplete="off"
                                />
                                {cardErrors && (
                                    <div className="card-error-message" role="alert">
                                        <span>{cardErrors.cardCvv}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <button 
                        className="btn-payment" 
                        type="submit"
                        disabled={Object.keys(cardErrors).length > 0}
                    >    
                        Pagar
                        <Spinner />
                    </button>
                </form>

                <div className="wrapper-payment">
                    <div className="wrapper-payment-title">
                        <h2 className="payment-title">Instrucciones de pago</h2>
                    </div>
                    <p className="payment-description">
                        Cuando llegamos con tu pedido, realizas el pago.
                    </p>

                    <Link to={"/"}>Realizar pedido</Link>
                </div>

            </div>
                                
        </div>
    );
}