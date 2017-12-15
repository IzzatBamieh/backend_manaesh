const membersController = require('../controllers').members;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Manaesh API!',
  }));
 
  app.post('/api/login', membersController.authenticate);
  app.post('/api/users', membersController.register);
  app.get(
    '/api/users/:id', membersController.getById
  );
  app.get(
    '/api/users/', membersController.getAll
  );
};