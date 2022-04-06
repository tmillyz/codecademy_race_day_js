let raceNumber = Math.floor(Math.random() * 1000);
const regEarly = false;
const runnerAge = 55;

if (runnerAge > 18 && regEarly === true) {
  raceNumber += 1000;
};

if (runnerAge > 18 && regEarly === true) {
  console.log(`Racer number: ${raceNumber} will race at 9:30 am.`);
} else if (runnerAge > 18 && regEarly === false) {
  console.log(`Racer number: ${raceNumber} will race at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`Racer number: ${raceNumber} will race at 12:30 pm`);
} else {
  console.log('See the registration desk');
}
