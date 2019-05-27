function formatPrice (price, letter_type, wrapInTag) {
    const currency = {'s': ' тг', 'f': ' тенге'};

    let formattedAmount = +price;
    formattedAmount = formattedAmount.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 '); // Разбиение на триады

    if (currency[letter_type]){
        formattedAmount += currency[letter_type];
    }

    if (wrapInTag) {
        formattedAmount = `<span class="nowrap">${formattedAmount}</span>`;
    }

    return formattedAmount;
}