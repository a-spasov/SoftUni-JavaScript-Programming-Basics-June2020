function concatenateData(arg1, arg2, arg3, arg4) {
    let firstName = arg1;
    let lastName = arg2;
    let age = Number(arg3);
    let town = arg4;
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}
concatenateData("Ivan", "Petrov", "26", "Haskovo");