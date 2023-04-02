function printNumber(a, b) {
    let c = setInterval(() => {
        console.log(a++);
        if (a > b) clearInterval(c);
    }, 1000)
}
printNumber(5, 15);