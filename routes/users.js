const router = require('express').Router();

const users = ['Bob', 'Alex', 'Will', 'Tristan'];


  // all routes will go here 
  router.get('/', (req, res) => {
      res.json(users);
  });

module.exports = router
