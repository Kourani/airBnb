'use strict';


const {Model, Validator} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Booking.belongsTo(
        models.Spot,
        {foreignKey:'spotId'}
      ),

      Booking.belongsTo(
        models.User,
        {foreignKey:'userId'}
      )
    }
  }
  Booking.init({
    userId:{
      type:DataTypes.INTEGER
    },
    spotId:{
      type:DataTypes.INTEGER
    },
    startDate:{
      type:DataTypes.STRING
    },
    endDate:{
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
