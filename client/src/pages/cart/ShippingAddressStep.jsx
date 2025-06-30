import { useState } from "react"
import { AddressValidateForm } from "../../utils/AddressValidateForm";
import { CheckCircle, InformationCircle, Spinner } from "../../assets/icons/icons";

const initialAddressForm = {
    email: "",
    country: "PE",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "TAC",
    postalCode: "",
    phone: "",
}


export const ShippingAddressStep = () => {

    const [ addressForm, setAddressForm ] = useState(initialAddressForm);
    const [ addressErrors, setAddressErrors ] = useState({});

    const { email, country, firstName, lastName, address, city, province, postalCode, phone } = addressForm; 

    const onInputAddressForm = ({target}) => {
        const {name, value} =  target;
        setAddressForm({
            ...checkoutForm,
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
                    
                    {/* Name and LastName */}
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
                <div className={`address-input-group ${addressErrors.country ? "address-input-error" : ""}`}>
                        <label htmlFor="country">País/Región</label>
                        <select
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

                {/* Address */}
                <div className={`input-group ${addressErrors.address ? "input-error" : ""}`}>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={onInputAddressForm}
                        placeholder=" "
                        // required
                    />
                    <label htmlFor="address">Dirección</label>
                    {addressErrors.address && <p className="error-message">{addressErrors.address}</p>}
                </div>
                
                {/* City and Province */}
                <div className="form-row">
                    <div className={`input-group ${addressErrors.city ? "input-error" : ""}`}>
                        <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={onInputAddressForm}
                        placeholder=" "
                        // required
                        />
                        <label htmlFor="city">Ciudad</label>
                        {addressErrors.city && <p className="error-message">{addressErrors.city}</p>}
                    </div>

                    <div className={`input-group ${addressErrors.state ? "input-error" : ""}`}>
                        <label htmlFor="province">Provincia</label>
                        <select
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
                </div>

                {/* Postal code and telephone */}
                <div className="form-row">
                    <div className="input-group">
                        <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={postalCode}
                        onChange={onInputAddressForm}
                        placeholder=" "
                        />
                        <label htmlFor="postalCode">Código postal (opcional)</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={onInputAddressForm}
                            placeholder=" "
                        />
                        <label htmlFor="phone">Teléfono (opcional)</label>
                        {addressErrors.phone && <p className="error-message">{addressErrors.phone}</p>}

                    </div>
                </div>

                <button className="address-button" type="submit">
                        Enviar
                </button>

            </form>

             
        </div>

            // <Link to="address/address">Siguiente</Link>

    )
}