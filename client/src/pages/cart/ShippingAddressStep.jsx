import { useState } from "react"
import { AddressValidateForm } from "../../utils/AddressValidateForm";
import { CheckCircle, InformationCircle, Spinner } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

const initialAddressForm = {
    email: "",
    country: "PE",
    firstName: "",
    lastName: "",
    address: "",
    city: "TAC",
    province: "TAC",
    postalCode: "",
    phone: "",
}


export const ShippingAddressStep = () => {

    const [ addressForm, setAddressForm ] = useState(initialAddressForm);
    const [ addressErrors, setAddressErrors ] = useState({});

    const navigate = useNavigate();

    const { email, country, firstName, lastName, address, city, province, postalCode, phone } = addressForm; 

    const onInputAddressForm = ({target}) => {
        const {name, value} =  target;
        setAddressForm({
            ...addressForm,
                [name]: value,
        });
    };

    const onSubmitAddressForm = (event) => {
        event.preventDefault();

        const errors = AddressValidateForm(addressForm);
        console.log("errors", errors)

        if (Object.keys(errors).length > 0) {
        setAddressErrors(errors);
        return;
        }

        console.log("checkout ", addressForm);
        navigate("/checkout/payment");
        
    }

    return(

        <div className="address-form-container">

            <form className="address-form" onSubmit={onSubmitAddressForm}> 

                {/* email */}
                <div className="address-shipping-address">
                    <div className="wrapper-address-title">
                        <h2 className="address-title">Información de contacto</h2>
                        <div className="wrapper-icons-title">
                            <CheckCircle /> <InformationCircle /> <Spinner />
                        </div>
                    </div>

                    <p className="address-description">
                        Usaremos este correo electrónico para enviarte detalles y actualizaciones relacionadas con tu pedido.
                    </p>
                </div>

                <div className="address-shipping-address">
                    <div className={`input-group ${addressErrors ? "input-error" : ""}`}>
                        <label htmlFor="email" className="address-label">Dirección de correo electrónico</label>
                        <input 
                            className="address-input"
                            type="email" 
                            id="email"
                            name="email"
                            value={email}
                            onChange={onInputAddressForm}
                            placeholder="ejemplo@gmail.com"
                            autoComplete="email"
                            // required
                        />
                        {addressErrors && (
                            <p className="address-error-message" role="alert">
                                <span>{addressErrors.email}</span>
                            </p>

                        )}
                    </div>
                </div>

                <div className="address-shipping-address">
                    <div className="wrapper-address-title"> 
                        <h2 className="address-title">Dirección de envío</h2>
                        <div className="wrapper-icons-title">
                            <CheckCircle /> <InformationCircle /> <Spinner />
                        </div>
                    </div>
                                            
                    <p className="address-description">
                        Introduce la dirección a dónde quieras que se entregue tu pedido.
                    </p>   
                </div>

                {/* Name and LastName */}
                <div className="address-shipping-address">
                    <div className="form-row">
                        <div className={`input-group ${addressErrors.firstName ? "input-error" : ""}`}>
                            <label htmlFor="firstName" className="address-label">Nombre</label>
                            <input
                                className="address-input"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={onInputAddressForm}
                                placeholder="Mateo"
                                // required
                            />
                            {addressErrors.firstName && (
                            <p className="error-message">{addressErrors.firstName}</p>
                            )}
                        </div>

                        <div className={`input-group ${addressErrors.lastName ? "input-error" : ""}`}>
                            <label htmlFor="lastName" className="address-label">Apellidos</label>
                            <input
                                className="address-input"
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={onInputAddressForm}
                                placeholder="Sanchez"
                                // required
                            />
                            {addressErrors.lastName && (
                            <p className="error-message">{addressErrors.lastName}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Country */}
               <div className="address-shipping-address">
                    <div className="form-row">
                        <div className={`input-group ${addressErrors.country ? "address-input-error" : ""}`}>
                            <label htmlFor="country" className="address-label">País/Región</label>
                            <select
                                className="address-select"
                                id="country"
                                name="country"
                                value={country}
                                onChange={onInputAddressForm}
                                // required
                            >
                                <option value="PE">Perú</option>
                                <option value="MX">México</option>
                                <option value="CO">Colombia</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* City and Province */}
                <div className="address-shipping-address">
                    <div className="form-row">
                        <div className={`input-group ${addressErrors.state ? "input-error" : ""}`}>
                            <label htmlFor="province" className="address-label">Provincia</label>
                            <select
                                className="address-select"
                                id="province"
                                name="province"
                                value={province}
                                onChange={onInputAddressForm}
                                // required
                            >
                                <option value="TAC">Tacna</option>
                                <option value="CAL">El Callao</option>
                                <option value="ARE">Arequipa</option>
                            </select>
                        </div>

                        <div className={`input-group ${addressErrors.state ? "input-error" : ""}`}>
                            <label htmlFor="city" className="address-label">Distrito</label>
                            <select
                                className="address-select"
                                id="city"
                                name="city"
                                value={city}
                                onChange={onInputAddressForm}
                                // required
                            >
                                <option value="TAC">Tacna</option>
                                <option value="AA">Alto de la Alianza</option>
                                <option value="GA">Gregorio Albarracín</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="address-shipping-address">
                    <div className={`input-group ${addressErrors.address ? "input-error" : ""}`}>
                        <label htmlFor="address" className="address-label">Dirección</label>
                        <input
                            className="address-input"
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={onInputAddressForm}
                            placeholder="Mz. F Lte. 8"
                            // required
                        />
                        {addressErrors.address && <p className="error-message">{addressErrors.address}</p>}
                    </div>
                </div>


                {/* Postal code and telephone */}
                <div className="address-shipping-address">
                    <div className="form-row">
                        <div className="input-group">
                        <label htmlFor="postalCode" className="address-label">Código postal (opcional)</label>
                            <input
                                className="address-input"
                                type="number"
                                id="postalCode"
                                name="postalCode"
                                value={postalCode}
                                onChange={onInputAddressForm}
                                placeholder="23001"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="phone" className="address-label">Teléfono</label>
                            <input
                                className="address-input"
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={onInputAddressForm}
                                placeholder="970449496"
                            />
                            {addressErrors.phone && <p className="error-message">{addressErrors.phone}</p>}

                        </div>
                    </div>
                </div>


                <button className="address-button" type="submit">
                        Continuar
                </button>

            </form>

            <section className="shipping-method-section">
                <h2 className="shipping-title">Envío</h2>
                <span className="shipping-line"></span>
                <p className="shipping-info">Por favor completa los pasos previos para desbloquear esta sección</p>
            </section>

             
        </div>

            // <Link to="address/address">Siguiente</Link>

    )
}