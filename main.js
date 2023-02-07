let raceNumber = Math.floor(Math.random() * 1000);

var registeredEarly = false;

var age = 20;

if ( age > 18 && registeredEarly === true) {
    raceNumber +=1000
}

if ( age > 18 && registeredEarly === true) {
    console.log(`You will race at 9:30 am with race number ${raceNumber}`);
} else if ( age > 18 && registeredEarly === false) {
    console.log(`You will race at 11:00 am with race number: ${raceNumber}`);
} else if ( age < 18){
    console.log(`You will race at 12:30 pm with race number: ${raceNumber}`);
}

