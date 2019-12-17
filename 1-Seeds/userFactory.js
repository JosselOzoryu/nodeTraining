const faker = require('faker');

module.exports = function () {

    // Female = 0 Male = 1
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(firstName, lastName);
    const username = faker.internet.userName(firstName, lastName);
    const password = faker.internet.password(8);

    return {
        firstName,
        lastName,
        username,
        email,
        password,
        gender,
    };
}