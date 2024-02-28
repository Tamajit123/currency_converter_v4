import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_MFueUHvaetTzowBQ7INXRJFYodWZY51hY9R06U4Z');


export async function convertCurrency(fromCurrency, toCurrency, units) {
    const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = response.data[toCurrency];
    return multiplier * units;
}