function cinemaTickets(input) {
    let i = 0;
    let currentPosition;
    let movie = input[i];
    let numberOfSeats = 0;
    let studentTicket = 0;
    let standartTicket = 0;
    let kidTicket = 0;
    let currentCapacity = 0;
    let totalStudentTicket = 0;
    let totalStandartTicket = 0;
    let totalKidTicket = 0;
    let totalTickets = 0;
    outer: while (movie != "Finish") {
        i++;
        numberOfSeats = Number(input[i]);
        for (let j = 1; j <= numberOfSeats; j++) {
            i++;
            currentPosition = input[i];
            switch (currentPosition) {
                case "kid":
                    kidTicket++;
                    totalKidTicket++;
                    totalTickets++;
                    break;
                case "student":
                    studentTicket++;
                    totalStudentTicket++;
                    totalTickets++;
                    break;
                case "standard":
                    standartTicket++;
                    totalStandartTicket++;
                    totalTickets++;
                    break;
                case "End":
                    currentCapacity = 100*(kidTicket + studentTicket + standartTicket)/numberOfSeats;
                    console.log(`${movie} - ${currentCapacity.toFixed(2)}% full.`);
                    break;
                case "Finish":
                    currentCapacity = 100*(kidTicket + studentTicket + standartTicket)/numberOfSeats;
                    console.log(`${movie} - ${currentCapacity.toFixed(2)}% full.`);
                   
                    break outer;
            }
            if (j == numberOfSeats && currentPosition != "End") {
                currentCapacity = 100*(kidTicket + studentTicket + standartTicket)/numberOfSeats;
                console.log(`${movie} - ${currentCapacity.toFixed(2)}% full.`);
                kidTicket = 0;
                standartTicket = 0;
                studentTicket = 0;
                break;
            }
            if (currentPosition == "End") {
                kidTicket = 0;
                standartTicket = 0;
                studentTicket = 0;
                break;
            }           
        }
        i++;
        movie = input[i];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(totalStudentTicket/totalTickets*100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandartTicket/totalTickets*100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKidTicket/totalTickets*100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"2",
"student",
"End",
"Kiik",
2,
"kid",
"Finish"])

