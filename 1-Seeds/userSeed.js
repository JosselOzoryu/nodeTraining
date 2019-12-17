const userFactory = require('./userFactory');
const createCSV = require('./createCSV');

module.exports = function (totalUsers) {
    const users = [];
    for (let index = 0; index < totalUsers; index++) {
        users.push(userFactory());
    }

    // Here you should call the db to create the data
    createCSV(users);
}