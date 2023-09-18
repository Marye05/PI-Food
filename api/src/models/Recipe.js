const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type : DataTypes.STRING,
      allowNull: false
    },
    healthScore: {
      type : DataTypes.STRING,
      allowNull: false,
    },
    steps:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },{
    timestamps: false,
});
};
