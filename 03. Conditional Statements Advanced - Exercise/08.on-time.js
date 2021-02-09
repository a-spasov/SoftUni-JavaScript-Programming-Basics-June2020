function onTime(arg1, arg2, arg3, arg4) {
    let examHour = Number(arg1);
    let examMinutes = parseInt(arg2);
    let hour = Number(arg3);
    let minutes = parseInt(arg4);
    let differenceMinutes;
    let differenceHours = Math.abs(examHour - hour);
    if (examHour > hour) {
        if (minutes == examMinutes) {
            differenceMinutes = 0;
        } else {
            differenceMinutes = 60 - minutes;
            differenceMinutes = differenceMinutes + examMinutes;
        } 
        if (differenceHours==1 && differenceMinutes==0) {
            console.log("Early");
            console.log(`${differenceHours}:00 hours before the start`);
        }               
        if (differenceHours==1 && differenceMinutes>0 && differenceMinutes<=30) {
            console.log(`On time`);
            console.log(`${differenceMinutes} minutes before the start`);            
        }
        if (differenceHours==1 && differenceMinutes>30 && differenceMinutes <60) {
            console.log("Early");
            console.log(`${differenceMinutes} minutes before the start`);
        }
        if (differenceHours==1 && differenceMinutes>=60) {
            if (differenceMinutes%60 < 10) {
                console.log("Early");
                console.log(`${differenceHours}:0${differenceMinutes%60} hours before the start`); 
            } else {
                console.log("Early");
                console.log(`${differenceHours}:${differenceMinutes%60} hours before the start`); 
            }                       
        }
        if (differenceHours>1) {
            if (differenceMinutes == 0) {
                console.log("Early");
                console.log(`${differenceHours}:00 hours before the start`);
            } 
            if (differenceMinutes>0 && differenceMinutes<10) {
                console.log("Early");
                console.log(`${(differenceHours-1)}:0${differenceMinutes} hours before the start`);
            }
            if (differenceMinutes>=10 && differenceMinutes<60) {
                console.log("Early");
                console.log(`${(differenceHours-1)}:${differenceMinutes} hours before the start`);
            }
            if (differenceMinutes>=60) {
                if ((differenceMinutes%60) < 10) {
                    console.log("Early");
                    console.log(`${(differenceHours)}:0${differenceMinutes%60} hours before the start`);  
                } else {
                    console.log("Early");
                    console.log(`${differenceHours}:${differenceMinutes%60} hours before the start`); 
                }                           
            }    
        }
    }
    if (examHour == hour) {
        if (examMinutes == minutes) {
            console.log("On time");
        }
        if (examMinutes > minutes) {
            differenceMinutes = examMinutes - minutes;
            if (differenceMinutes<=30) {
                console.log("On time");
                console.log(`${differenceMinutes} minutes before the start`);
            } else {
                console.log("Early");
                console.log(`${differenceMinutes} minutes before the start`);
            }
        }
        if (minutes > examMinutes) {
            differenceMinutes = minutes - examMinutes;
            console.log("Late");
            console.log(`${differenceMinutes} minutes after the start`);
        }
    }
    if (examHour < hour) {
        if (minutes == examMinutes) {
            console.log("Late");
            console.log(`${differenceHours}:00 hours after the start`);
        } else {
            differenceMinutes = 60 - examMinutes;
            differenceMinutes = differenceMinutes + minutes; 
        }
        if (differenceHours == 1) {            
            if (differenceMinutes>60) {
                if ((differenceMinutes%60) < 10) {
                    console.log("Late");
                    console.log(`${differenceHours}:0${differenceMinutes%60} hours after the start`); 
                } else {
                    console.log("Late");
                    console.log(`${differenceHours}:${differenceMinutes%60} hours after the start`);
                }            
            }  
            if (differenceMinutes<60) {
                console.log("Late");
                console.log(`${differenceMinutes} minutes after the start`); 
            }                       
        }
        if (differenceHours>1 && examMinutes!=minutes) {   
            if (differenceMinutes>60) {
                if ((differenceMinutes%60) < 10) {
                    console.log("Late");
                    console.log(`${differenceHours}:0${differenceMinutes%60} hours after the start`);
                } else {
                    console.log("Late");
                    console.log(`${differenceHours}:${differenceMinutes%60} hours after the start`);
                }                            
            } else {
                console.log("Late");
                console.log(`${(differenceHours-1)}:${differenceMinutes} hours after the start`);
            }                    
        }                
    }
}
onTime(11, 50, 11, 40);