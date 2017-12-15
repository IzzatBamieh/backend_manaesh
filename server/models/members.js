module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    userName:{
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password:{
      type: DataTypes.STRING(50),
      allowNull: false
    },
    firstName:{
      type: DataTypes.STRING(100)
    },
    lastName:{
      type: DataTypes.STRING(100)
    },
    type:{
      type: DataTypes.STRING(10),
      allowNull: false
    }
  });

  console.log(Member[0]);
  return Member;
};