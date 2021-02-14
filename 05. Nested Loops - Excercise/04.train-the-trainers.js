function trainers(input) {
    let numberOfScores = Number(input[0]);
    let i = 1;
    let currentPresentation = input[i];
    let currentScore = 0;
    let presentationScore = 0;
    let finalScore = 0;
    let numberOfPresentations = 0;
    while (currentPresentation != "Finish") {       
        numberOfPresentations++;
        for (let j = 1; j <= numberOfScores; j++) {
            i++;
            currentScore = Number(input[i]);
            presentationScore += currentScore;
        }
        presentationScore = presentationScore/numberOfScores;
        finalScore += presentationScore;
        console.log(`${currentPresentation} - ${presentationScore.toFixed(2)}.`);
        presentationScore = 0;
        i++;
        currentPresentation = input[i];
    }
    finalScore = finalScore/numberOfPresentations;
    console.log(`Student's final assessment is ${finalScore.toFixed(2)}.`);
}
trainers([2,"kiki",5, 6, "kuku", 6, 6, "Finish"]);