function graduation(input) {
    let name = input[0];
    let i = 1;
    let score = Number(input[i]);
    let totalScore = 0;
    let badScores = 0;
    let grade = 1;
    while (i < input.length) {
        score = Number(input[i]);
        if (score < 4) {
            badScores++;
            if (badScores > 1) {
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
            i++;
            continue;
        }       
        totalScore = totalScore + score;
        i++;
        grade++;
    }
    if (badScores <= 1) {
        totalScore = totalScore/12;
        console.log(`${name} graduated. Average grade: ${totalScore.toFixed(2)}`);
    }  
}
graduation(["Mimi",
5,
5.5,
6,
5.43,
5.5,
6,
5.55,
5,
6,
6,
5.43,
5]);