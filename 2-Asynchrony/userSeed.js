const userFactory = require('./userFactory');
const createCSVcallback = require('./createCSVcallback');
const createCSVfspromises = require('./createCSVfspromises');
const createCSVpromisified = require('./createCSVpromisified');
const createCSVunhandledPromise = require('./createCSVunhandledPromise');

module.exports = function (totalUsers) {
    const users = [];
    for (let index = 0; index < totalUsers; index++) {
        users.push(userFactory());
    }

    // Here you should call the db to create the data

    // The following three functions handle the promise
    createCSVcallback(users);    
    createCSVfspromises(users);
    createCSVpromisified(users);
    
    // The promise is returned and will be handled by upper scope
    return createCSVunhandledPromise(users);
}