let a = prompt('Введите число');

if (a > 1000) {
    console.log('Данные неверны');
} else if (a == 0 || a == 1) {
    console.log('Простые числа — это натуральные числа, больше единицы, которые делятся без остатка только на 1 и на само себя. Единица и ноль не являются ни простыми числами, ни составными.')
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