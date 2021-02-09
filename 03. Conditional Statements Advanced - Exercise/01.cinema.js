function cinema(arg1, r, c) {
    let movie = arg1;
    let rows = Number(r);
    let colomns = Number(c);
    let income = 0;
    switch (movie) {
        case "Premiere":
            income = rows*colomns*12;
            break;
        case "Normal":
            income = rows*colomns*7.5;
            break;
        case "Discount":
            income = rows*colomns*5;
            break;
    }
    console.log(income.toFixed(2));
}
cinema("Normal", 6, 5);