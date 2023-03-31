function argFunc(a) {
    return function returnFunc(b) {
        sum = a + b;
        return sum;
    }
}

console.log(argFunc(6)(9));