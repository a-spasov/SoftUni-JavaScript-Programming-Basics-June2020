function booksList(arg1, arg2, arg3) {
    let numberOfPages = Number(arg1);
    let pagesPerHour = Number(arg2);
    let daysForReading = Number(arg3);
    let hoursPerDay = numberOfPages/pagesPerHour/daysForReading;
    console.log(hoursPerDay);
}
booksList(432, 15, 4);