function examPreparation(input) {
    let totalBadGrades = Number(input[0]);
    let badGrades = 0;
    let currentProblem;
    let problem;
    let problemCount = 0;
    let currentGrade = 0;
    let averageGrade = 0;  
    let i = 0;
    while ( currentProblem != "Enough") {
        currentProblem = input[2*i + 1];
        problemCount++;
        i++;
        if ((i*2) < input.length) {
            currentGrade = Number(input[i*2]);
            averageGrade = averageGrade + currentGrade;
        }
        if (currentGrade <= 4) {
            badGrades++;
        }
        if (badGrades == totalBadGrades) {
            console.log(`You need a break, ${totalBadGrades} poor grades.`);
            break;
        }
    }   
    if ( currentProblem == "Enough") {
        i = i - 2;
        problem = input[2*i +1];
        problemCount--;
        averageGrade = averageGrade/problemCount;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${problem}`);
    }  
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


