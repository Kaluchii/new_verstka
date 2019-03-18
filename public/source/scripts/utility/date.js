function parseDate (input, format = 'yyyy-mm-dd') {
    const parts = input.match(/(\d+)/g);
    let fmt = {},
        i = 0;

    format.replace(/(yyyy|dd|mm)/g, function (part) {
        fmt[part] = i++;
    });

    return new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
}


function dateFormat (date, type = 0) {
    let formattedDate;

    if (date) {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        if (typeof(date) === 'string') {
            date = date.replace(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/, '$3-$2-$1');
            date = parseDate(date);
        }

        if (type === 1) {
            formattedDate = date.getDate() + ' ' + months[date.getMonth()];
        } else if (type === 2) {
            formattedDate = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
        } else if (type === 10) {
            formattedDate = Math.round(Math.abs(date - new Date()) / 365);
        } else {
            let month = date.getMonth() + 1;
            formattedDate = (date.getDate() < 10 ? '0' : '') + date.getDate() + '.' + (month < 10 ? '0' : '') + month + '.' + date.getFullYear();
        }
    } else {
        formattedDate = '-';
    }

    return formattedDate;
}