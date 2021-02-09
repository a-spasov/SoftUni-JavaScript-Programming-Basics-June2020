function hotelRoom(arg1, arg2) {
    let month = arg1;
    let nights = Number(arg2);
    let studioPrice = 0;
    let apartmentPrice = 0;
    switch (month) {
        case "May":
        case "October":
            apartmentPrice = 65;
            studioPrice = 50;
            if (nights>7 && nights<=14) {
                studioPrice = 0.95*studioPrice;
            } else if (nights>14) {
                studioPrice = 0.7*studioPrice;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.2;
            apartmentPrice = 68.7;
            if (nights > 14) {
                studioPrice = 0.8*studioPrice;
            }
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }
    if (nights > 14) {
        apartmentPrice = 0.9*apartmentPrice;
    }
    console.log(`Apartment: ${(nights*apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights*studioPrice).toFixed(2)} lv.`);
}
hotelRoom("June", 14);