function readText(input) {
    let i = 0;
    let word = input[i];
    while (i < input.length) {
        if (word == "Stop") {
            break;
        }
        console.log(word);
        i++;
        word = input[i];
    }
}
readText([]);