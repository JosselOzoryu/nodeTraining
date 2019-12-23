const User = require("../models").User;

const userService = {
    create: (user) => User.create(user),
    get: () => User.findAll(),
    getById: (id) => User.findByPk(id),
    delete: (id) => User.destroy({
        where: {
            id
        }
    }),
};

module.exports = userService;
