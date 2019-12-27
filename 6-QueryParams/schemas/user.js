const Joi = require('@hapi/joi');

const pokemonSchema = Joi.object({
    name: Joi.string().min(3),
    
});

module.exports = Joi.object({

    pokemon: pokemonSchema,

    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    birthYear: Joi.number()
        .integer()
        .min(1900)
        .max(2013)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
});