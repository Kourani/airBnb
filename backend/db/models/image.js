'use strict';

const {Model, Validator} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Image.belongsTo(
        models.Review,
        {
          foreignKey:'id',
          constraints:false
        }
      )
      Image.belongsTo(
        models.Spot,
        {foreignKey:'id',
          constraints:false}
      )
    }
  }
  Image.init({
    url:{
      type: DataTypes.STRING
    },
    preview:{
      type:DataTypes.BOOLEAN
    },
    imagableType:{
      type:DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
