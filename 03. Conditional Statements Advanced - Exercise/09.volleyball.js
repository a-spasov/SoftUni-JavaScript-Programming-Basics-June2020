function volleyball(arg1, p, h) {
    let year = arg1;
    let holidays = Number(p);
    let weekendsHome = Number(h);
    let gamesSofia;
    let gamesHome;
    let gamesHolidays;
    let totalGames;
    gamesSofia = (48-weekendsHome)*3.0/4;  
    gamesHome = weekendsHome;
    gamesHolidays = holidays*2.0/3;
    if (year == "normal") {
        totalGames = gamesSofia+gamesHome+gamesHolidays;
    } else {
        totalGames = gamesSofia+gamesHome+gamesHolidays;
        totalGames = 1.15*totalGames;
    }
    console.log(Math.floor(totalGames));
}
volleyball("normal", 3, 2);