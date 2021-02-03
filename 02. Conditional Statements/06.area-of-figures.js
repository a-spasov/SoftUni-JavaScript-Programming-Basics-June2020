function area(arg1, arg2, arg3) {
    let figure = arg1;
    let sideA = Number(arg2);
    let sideB = Number(arg3);
    let area = 0;
    if (figure === "square") {
        area = sideA**2;
        console.log(area.toFixed(3));
    }
    if (figure === "rectangle") {
        area = sideA*sideB;
        console.log(area.toFixed(3));
    }
    if (figure === "circle") {
        area = Math.PI*sideA**2;
        console.log(area.toFixed(3));
    }
    if (figure === "triangle") {
        area = sideA*sideB/2;
        console.log(area.toFixed(3));
    }
}
area("triangle", 4.5, 20)