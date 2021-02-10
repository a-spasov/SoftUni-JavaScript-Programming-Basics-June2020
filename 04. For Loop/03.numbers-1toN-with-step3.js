function numbers(arg1) {
    let n = Number(arg1);
    for ( let i = 1; i <= n;i += 3) {
        console.log(i);
    }
}
numbers(10);