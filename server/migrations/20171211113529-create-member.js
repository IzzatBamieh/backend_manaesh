module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Members', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
          },
          userName:{
            type: Sequelize.STRING(50),
            allowNull: false
          },
          password:{
            type: Sequelize.STRING(50),
            allowNull: false
          },
          firstName:{
            type: Sequelize.STRING(100)
          },
          lastName:{
            type: Sequelize.STRING(100)
          },
          type:{
            type: Sequelize.STRING(10),
            allowNull: false
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          }
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Todos'),
  };