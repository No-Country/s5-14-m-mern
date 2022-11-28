
export const getMathOperation = (difficulty = 2, quantityOfValues) => {
    const easyMaxVal = 10;
    const mediumMaxVal = 501;
    const hardMaxVal = 1001;
    switch (difficulty) {
        case 2:
            return getAllValues(quantityOfValues, difficulty, easyMaxVal);
        case 3:
            return getAllValues(quantityOfValues, difficulty, mediumMaxVal);
        case 4:
            return getAllValues(quantityOfValues, difficulty, hardMaxVal);
        default:
            break;
    }
}

const getAllValues = (quantityOfValues = 2, difficulty = 2, maxVal) => {
    const operatorsMap = {
        'x': (n1, n2, n3 = 1) => n1 * n2 * n3,
        '÷': (n1, n2, n3 = 1) => n1 / n2 / n3,
        '+': (n1, n2, n3 = 0) => n1 + n2 + n3,
        '-': (n1, n2, n3 = 0) => n1 - n2 - n3
    }
    let values = getRandomNumbersArray(quantityOfValues, 1, maxVal);
    let operator = getRandomOperator(difficulty);
    let finalVal = operatorsMap[operator](...values);
    return [...values, operator, Math.floor(finalVal)];
}


const getRandomOperator = (limit) => {
    const operators = ["+", "-", "x", "÷"];
    return operators[getRandomNumber(0, limit)];
}

const getRandomNumbersArray = (quantityOfValues = 2, minLimit, MaxLimit) => {
    let vals = [];
    while (quantityOfValues) {
        quantityOfValues--;
        vals.push(getRandomNumber(minLimit, MaxLimit));
    }
    if (vals.length > 1) {
        vals = vals.sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
    }
    return vals;
}

const getRandomNumber = (minLimit, MaxLimit) => {
    return Math.floor(Math.random() * (MaxLimit - minLimit) + minLimit);
}
