function calculateProject(arg1, arg2) {
    let name = arg1;
    let numberOfProjects = Number(arg2);
    let hours = numberOfProjects*3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${numberOfProjects} project/s.`);
}
calculateProject("Ivan", "6");