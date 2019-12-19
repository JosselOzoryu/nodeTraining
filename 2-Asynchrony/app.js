const userSeed = require('./userSeed');

// Added async await to function
async function app() {
    try {
        const result = await userSeed(10);
        console.log('From App :', result);
    } catch (error) {
        console.log('error :', error);
    }
}

app();