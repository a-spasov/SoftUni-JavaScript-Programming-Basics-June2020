function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let cake = cakeLength*cakeWidth;
    let pieces;
    let i = 2;
    while (i < input.length) {
        pieces = input[i];
        if (pieces == "STOP") {
            console.log(`${cake} pieces are left.`)
            break;
        } else {
            pieces = Number(pieces);
            cake = cake - pieces;
            if (cake < 0) {
                console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
                break;
            }
        }
        i++;
    }
}
cake([ '10', '2', '2', '4', '6', 'STOP' ]);
