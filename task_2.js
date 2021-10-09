// Задание 2

function isSimpleNumber(number) {
    if (typeof number != "number" || number > 1000 || number < 1) {
        return "Данные не верны!"
    }
    if (number === 1) {
        return `${number} - не простое число.`
    }
    for(let i = 2; i < number; i++) {
        if (number % i == 0) {
            return `${number} - не простое число.`
        }
    }
    return `${number} - простое число.`
}
