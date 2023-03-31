let a = prompt('Введите число');

if (a <= 1 || a > 1000) {
    console.log('Данные неверны');
} else if (a == 2) {
    console.log('Введенное число - простое');
} else {
    getSimpleNumber(a);
}

function getSimpleNumber(a) {
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            console.log('Введенное число не является простым');
            return;
        } else {
            console.log('Введенное число - простое');
            return;
        }
    }
}