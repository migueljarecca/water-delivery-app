
export const formatPrice = (price) => { 

    if (price === null || price === undefined) return 0;

      return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
        currencyDisplay: 'symbol',
    })
        .format(price)
        .replace('PEN', 'S/');
};
