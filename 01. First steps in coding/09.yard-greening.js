function yardGreening(arg1) {
    let area = Number(arg1);
    let price = 7.61*area;
    let discount = 0.18*price;
    console.log(`The final price is: ${price-discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(100);