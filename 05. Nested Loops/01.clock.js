function clock() {
    let minute = 0;
    let hour = 0;
    while (hour< 24) {
        while (minute <= 60) {
            if (minute == 60) {
                hour++;
                minute = 0;
                break;
            }
            console.log(`${hour}:${minute}`);
            minute++;
        }
    }
}
clock();