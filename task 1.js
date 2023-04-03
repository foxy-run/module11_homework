let arrayCount = [6, 1, 0.6, null, 8, 0.8, 517, undefined, 0, "sstring", 404];
let zeroCount = 0;
let numCount = 0;
let evenCount = 0;
let oddCount = 0;

function getOddAndEvenCount() {
    for (let i = 0; i < arrayCount.length; i++) {
        if (typeof arrayCount[i] === "number" || !isNaN(arrayCount[i])) {
            numCount += 1;
            if (arrayCount[i] === 0) {
                zeroCount += 1;
            } else if (arrayCount[i] % 2 === 0) {
                evenCount += 1;
            } else {
                oddCount += 1;
            }
        }
    }
    console.log(`В массиве: ${numCount} цифр, ${zeroCount} нулей, ${evenCount} чётных, и ${oddCount} нечётных`);
}

getOddAndEvenCount();