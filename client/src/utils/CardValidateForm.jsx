
export const CardValidateForm = (cardForm = {}) => { 

    const { cardNumber, cardName, cardExpiration, cardCvv } = cardForm;

    const errors = {};

    if (!cardNumber) {
        errors.cardNumber = "El número de tarjeta es obligatorio";
    } else if (!/^\d{16}$/.test(cardNumber)) {
        errors.cardNumber = "El número de tarjeta debe tener 16 dígitos";
    }

    if (!cardName) {
        errors.cardName = "El nombre del titular es obligatorio";
    }

    if (!cardExpiration) {
        errors.cardExpiration = "La fecha de expiración es obligatoria";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiration)) {
        errors.cardExpiration = "Formato de fecha inválido. Use MM/AA";
    }

    if (!cardCvv) {
        errors.cardCvv = "El CVV es obligatorio";
    } else if (!/^\d{3}$/.test(cardCvv)) {
        errors.cardCvv = "El CVV debe tener 3 dígitos";
    }

    return errors;

}