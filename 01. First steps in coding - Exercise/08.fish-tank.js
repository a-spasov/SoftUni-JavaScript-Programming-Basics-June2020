function fishTank(arg1, arg2, arg3, arg4) {
    let lengthDecimetres = Number(arg1)/10;
    let widthDecimetres = Number(arg2)/10;
    let heightdecimetres = Number(arg3)/10;
    let percentage = Number(arg4)/100;
    let volume = lengthDecimetres*widthDecimetres*heightdecimetres;
    volume = volume - percentage*volume;
    console.log(volume);
}
fishTank("85", "75", "47", "17");