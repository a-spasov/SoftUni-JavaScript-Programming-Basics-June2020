function calculate(input) {
    let salary = Number(input[1]);
    for (let i = 2; i < input.length; i++) {
        let currentSite = input[i];
        if (currentSite == "Facebook") {
            salary = salary - 150;
        } else if (currentSite == "Instagram") {
            salary = salary - 100;
        } else if (currentSite == "Reddit") {
            salary = salary - 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }
}
calculate([3, 380, "Facebook", "Reddit", "Instagram"]);