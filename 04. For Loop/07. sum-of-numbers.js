function sumDigits(arg1) {
    let number = arg1;
    let totalSum = 0;
    for (let i = 0; i < number.length; i++) {
        let digit = Number(number[i]);
        totalSum = totalSum + digit;
    }
    console.log(`The sum of the digits is:${totalSum}`);
}
sumDigits("1234");