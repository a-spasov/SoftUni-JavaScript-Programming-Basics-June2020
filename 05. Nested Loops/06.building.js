function building(input) {
    let floors = Number(input[0]);
    let numberPerFloor = Number(input[1]);
    let output = "";
    for (let j = floors; j >=1; j--) {
        for (let i = 0; i< numberPerFloor; i++) {
            if (j == floors) {
                if (i == numberPerFloor) {
                    output = output + "L" + j + i;
                } else {
                    output = output + "L" + j + i + " ";
                }
            } 
            if ((j%2 == 0) && (j != floors)) {
                if (i == numberPerFloor) {
                    output = output + "O" + j + i;
                } else {
                    output = output + "O" + j + i + " ";
                }
            }
            if ((j%2 != 0) && (j != floors)) {
                if (i == numberPerFloor) {
                    output = output + "A" + j + i;
                } else {
                    output = output + "A" + j + i + " ";
                }
            }
        }
        console.log(output);
        output = "";
    }
}
building([3,2]);