function CurrencyFormater(number) {
    const formater = new Intl.NumberFormat('de-DE', { currency: 'USD', style: 'currency' });
    return `$${formater.format(number).slice(0, -5)}`;
}

export default CurrencyFormater;