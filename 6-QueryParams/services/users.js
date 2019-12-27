const User = require("../models").User;

const userService = {
    create: (user) => User.create(user),
    get: (offset = 0, limit = 10, sort = 'firstName', firstName) => 
    {
        let params = { offset, limit, order: [[sort, 'DESC']] };
        if (firstName) {
            params = {
                ...params,
                where: { firstName },
            }
        }
        return User.findAll(params);
    },
    getById: (id) => User.findByPk(id),
    delete: (id) => User.destroy({
        where: {
            id
        }
    }),
};

module.exports = userService;
