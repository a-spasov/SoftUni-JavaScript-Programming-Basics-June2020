function countWords(arg1) {
    let message = arg1;
    let count = 1;
    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            count += 1;
        }
    }
    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}
countWords("Hello, my name is Angel and I am 20 years old");