const userSeed = require('./userSeed');

function app() {
    userSeed(10);
    console.log('CSV successfully created');
}

app();