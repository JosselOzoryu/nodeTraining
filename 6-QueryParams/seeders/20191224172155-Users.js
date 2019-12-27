'use strict';
const userFactory = require('../factories/userFactory')

module.exports = {
    up: (queryInterface, Sequelize) => {
		const users = [];
		const totalUsers = 10;
		for (let index = 0; index < totalUsers; index++) {
			users.push(userFactory());
		}

		// Insert 10 users into db
		return queryInterface.bulkInsert('Users', users, {});
    },

    down: (queryInterface, Sequelize) => {
    	return queryInterface.bulkDelete('Users', null, {});
    }
};


const animals = [
	'gato',
	'perico',
	'perro',
	'zorro',
]