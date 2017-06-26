'use strict';
module.exports = function(sequelize, DataTypes) {
  var task = sequelize.define('task', {
    title: DataTypes.STRING,
    iscompleted: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return task;
};