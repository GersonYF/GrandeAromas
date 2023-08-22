module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {  // foreign key referencing User model
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    department: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Address;
};
