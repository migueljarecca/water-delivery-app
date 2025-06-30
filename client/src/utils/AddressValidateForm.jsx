
export const AddressValidateForm = (addressForm = {}) => {

    const { email, country, firstName, lastName, address, city, province, postalCode, phone } = addressForm; 

    const errors = {};

    // Email validation
    if (!email.trim()) {
        errors.email = "Por favor ingrese un correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "El correo electrónico no es válido.";
    }

    // Name validation
    if (!firstName.trim()) {
        errors.firstName = "Por favor ingrese un nombre.";
    } else if (firstName.length < 3) {
        errors.firstName = "El nombre debe tener al menos tres caracteres.";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(firstName)) {
        errors.firstName = "El nombre solo debe contener letras.";
    }

    // LastName validation
    if (!lastName.trim()) {
        errors.lastName = "Por favor ingrese un apellido.";
    } else if (lastName.length < 3) {
        errors.lastName = "El apellido debe tener al menos tres caracteres.";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(lastName)) {
        errors.lastName = "El apellido solo debe contener letras.";
    }

    // Country validation
    if (!country.trim()) {
        errors.country = "Por favor seleccione un país.";
    }

    // Address validation
    if (!address.trim()) {
        errors.address = "Por favor ingrese una dirección.";
    } else if (address.length < 5) {
        errors.address = "La dirección debe tener al menos 5 caracteres.";
    }

    // City validation
    if (!city.trim()) {
        errors.city = "Por favor ingrese una ciudad.";
    } else if (city.length < 3) {
        errors.city = "La ciudad debe tener al menos 3 caracteres.";
    }

    // Province validation
    if (!province.trim()) {
        errors.province = "Por favor seleccione una provincia.";
    }

    // Postcode validation (optional but formatted if exists)
    if (postalCode.trim() && !/^[0-9]{4,6}$/.test(postalCode)) {
        errors.postalCode = "El código postal debe tener entre 4 y 6 dígitos.";
    }

    // Phone validation (optional but formatted if exists)
    if (phone.trim() && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone)) {
        errors.phone = "El número de teléfono no es válido.";
    }

    return errors;
} 