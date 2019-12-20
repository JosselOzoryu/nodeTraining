const express = require('express');
const router = express.Router();
const userService = require('../services/users');
const exists = require('../middlewares/exists');
const userSchema = require('../schemas/user');

router.get('/', function(req, res, next) {
  const users = userService.get();
  res.send(users);
});

router.post('/', function(req, res, next) {
  // const user = { username: 'alexpinkus'};
  const user = req.body;
  console.log('user :', user);
  const result = userSchema.validate(user);
  console.log('result :', result);
  userService.create(user);
  res.send(result.error);
});


router.get('/:id', exists(userService), function(req, res, next) {
  const { id } = req.params;
  const user = userService.getById(id);
  res.send(user);
});


router.put('/:id', exists(userService), function(req, res, next) {
  res.send('User was updated');
});

router.delete('/:id', exists(userService), function(req, res, next) {
  const { id } = req.params;
  userService.delete(id);
  res.send('User was deleted');
});


module.exports = router;
