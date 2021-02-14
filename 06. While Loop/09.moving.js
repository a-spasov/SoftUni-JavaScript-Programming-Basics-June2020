function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let roomVolume = width*length*height;
    let i = 3;
    let boxes;
    while (i < input.length) {
        boxes = input[i];
        if (boxes == "Done") {
            break;
        }
        boxes = Number(boxes);
        roomVolume = roomVolume - boxes;
        if (roomVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(roomVolume)} Cubic meters more.`);
            break;
        }
        i++;
    }
    if (roomVolume > 0) {
        console.log(`${roomVolume} Cubic meters left.`);
    }
}
moving([10,10,2,200,30,"Done"])