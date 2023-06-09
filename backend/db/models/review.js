'use strict';



const {Model, Validator} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Review.belongsTo(
        models.User,
        {foreignKey:'userId'}
      ),

      Review.belongsTo(
        models.Spot,
        {foreignKey:'spotId'}
      ),

      Review.hasMany(
        models.Image,

        {
          as: 'ReviewImages',
        foreignKey:'imagableId',
         constraints:false,
         scope:{
          imagableType:'Review'
         }
        }
      )
    }
  }
  Review.init({
    review: {
      type: DataTypes.STRING
    },
    stars:{
      type:DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
