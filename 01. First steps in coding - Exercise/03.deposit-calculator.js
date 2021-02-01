function calcDeposit(arg1, arg2, arg3) {
    let deposit = Number(arg1);
    let time = Number(arg2);
    let annualPercentage = Number(arg3)/100;
    let sum = (deposit + time*(deposit*annualPercentage/12)); 
    console.log(sum);
}
calcDeposit(200, 3, 5.7);