const express = require('express');
const router = express.Router();
const userService = require('../services/users');
const exists = require('../middlewares/exists');
const userSchema = require('../schemas/user');
const createError = require('http-errors');

router.get('/', async function(req, res, next) {
  try {
    const { page, per_page, sort, firstName } = req.query;
    // TODO: add sort_by order 'ASC' or 'DESC'
    // validator min max 
    // need to validate that firstName is a string
    // firstName, lastName, birthYear
    // birthYear is a number gt, lt, eq , 
    // firstName contains / eq 
    const limit = per_page;
    const offset = limit=== undefined ? undefined : (page-1) * limit;
    const users = await userService.get(offset, limit, sort, firstName);
    res.send(users);
  } catch (error) {
    console.log('error :', error);
    // Internal Server Error.
    // Because db failed.
    next(createError(500));
  }
});

router.post('/', async function(req, res, next) {
  // const user = { username: 'alexpinkus'};
  const user = req.body;
  console.log('user :', user);
  const result = userSchema.validate(user);
  console.log('result :', result);
  try {
    const newUser = await userService.create(user);
    res.send(newUser);
  } catch (error) {
    console.log('error :', error);
    // Internal Server Error.
    // Because db failed.
    next(createError(500));
  }
});


router.get('/:id', exists(userService), async function(req, res, next) {
  const { id } = req.params;
  const user = await userService.getById(id);
  res.send(user);
});


router.put('/:id', exists(userService), function(req, res, next) {
  res.send('User was updated');
});

router.delete('/:id', exists(userService), async function(req, res, next) {
  const { id } = req.params;
  await userService.delete(id);
  res.send('User was deleted');
});


module.exports = router;
