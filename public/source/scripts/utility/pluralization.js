function pluralization (num, wordsArray, showNum) {
    wordsArray = (wordsArray ? wordsArray : ['день', 'дня', 'дней']);

    let itemNum,
        result;

    itemNum = num % 10 === 1 && num % 100 !== 11 ? 0 : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? 1 : 2);
    result = wordsArray[itemNum];

    if (showNum) {
        result = num + ' ' + result;
    }

    return result;
}