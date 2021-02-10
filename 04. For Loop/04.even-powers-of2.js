function evenPowers(arg1) {
    let n = Number(arg1);
    for (let i = 0; i <= n; i += 2) {
        console.log(Math.pow(2,i));
    }
}
evenPowers(6);