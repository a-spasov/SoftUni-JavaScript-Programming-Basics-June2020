function calculate(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operation = arg3;
    let result = 0;
    let kind;
    switch (operation) {
        case "+":
            result = n1 + n2;
            if (result%2 == 0) {
                kind = "even";
            } else {
                kind = "odd";
            }
            console.log(`${n1} ${operation} ${n2} = ${result} - ${kind}`);
            break;
        case "-":
            result = n1 - n2;
            if (result%2 == 0) {
                kind = "even";
            } else {
                kind = "odd";
            }
            console.log(`${n1} ${operation} ${n2} = ${result} - ${kind}`);
            break;
        case "*":
            result = n1*n2;
            if (result%2 == 0) {
                kind = "even";
            } else {
                kind = "odd";
            }
            console.log(`${n1} ${operation} ${n2} = ${result} - ${kind}`);
            break;
        case "/":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1/n2;           
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1%n2;
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;      
    }
}
calculate(10, 4, "%");