const Member = require('../models').Member;
const Sequelize = require("sequelize");
const uuidv4 = require('uuid/v4');

const Op = Sequelize.Op;



module.exports = {
  register(req, res) {

    return Member
      .create ({
          id:uuidv4(),
          userName: req.body.userName,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          type: req.body.type,

        })
      .then(member => {
        if (!member) {
          return res.status(401).send({
            message: 'invalid user name or password',
          });
        }
        return res.status(201).send(member);
      })
      .catch(error => res.status(500).send(error));
  },
    authenticate(req, res) {
        
        
        return Member
          .findAll ({
            where: {
              userName:{[Op.iLike]: req.body.userName},
              password: req.body.password
            }
          })
          .then(members => {
            if (!members || members.length ===0) {
              return res.status(401).send({
                message: 'invalid user name or password',
              });
            }
            return res.status(200).send(members[0]);
          })
          .catch(error => res.status(500).send(error));
      },
      getById(req, res) {
        return Member
          .findAll ({
            where: {
              id: req.params.id
            }
          })
          .then(members => {
            if (!members || members.length ===0) {
              return res.status(404).send({
                message: 'user not found',
              });
            }
            return res.status(200).send(members[0]);
          })
          .catch(error => res.status(500).send(error));
      },
      getAll(req, res) {
        return Member
          .findAll()
          .then(member => {
            if (!member) {
              return res.status(404).send({
                message: 'user not found',
              });
            }
            return res.status(200).send(member);
          })
          .catch(error => res.status(500).send(error));
      }
};