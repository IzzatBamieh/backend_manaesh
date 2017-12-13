'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Members', [{
      id : '1bbd63c6-2b00-4fd5-9ec7-c956cfbfd178',
      userName : 'bob',
      password : 'secret',
      firstName : "Bob ",
      lastName : "Cook",
      type : "cook",
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Members', [{
      id : '1bbd63c6-2b00-4fd5-9ec7-c956cfbfd178'
    }])
  }
};
