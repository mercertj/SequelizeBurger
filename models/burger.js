module.exports = function(sequelize, DataTypes) {

  const newBurgers = sequelize.define("burgers" , {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    burger_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return newBurgers;

};

  
