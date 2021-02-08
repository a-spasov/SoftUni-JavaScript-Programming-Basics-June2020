function scollarship(arg1, arg2, arg3) {
    let income = Number(arg1);
    let averageGrade = Number(arg2);
    let minimalSalary = Number(arg3);
    let socialScollarship = 0;
    let excellentScollarship = 0;
    if (income < minimalSalary) {
        if (averageGrade > 4.5) {
            socialScollarship = 0.35*minimalSalary;
        }
    }
    if (averageGrade >= 5.5) {
        excellentScollarship = averageGrade*25;
    }
    if (excellentScollarship >= socialScollarship) {
        if (excellentScollarship !== 0) {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScollarship)} BGN`);
        } else if (excellentScollarship === 0) {
            console.log("You cannot get a scholarship!");
        }
    }
    if (socialScollarship > excellentScollarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScollarship)} BGN`);
    }
}
scollarship(400, 5.95, 350);