// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our Profile User model

module.exports = function(sequelize, DataTypes) {
    var Profiles = sequelize.define("Profiles", {
        display_name: DataTypes.STRING,
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false
          },
        user_age: DataTypes.INTEGER,
        sexual_identity: DataTypes.STRING,
        relationship_status: DataTypes.STRING,
        looking_for: DataTypes.TEXT,
        soc_quest1: DataTypes.INTEGER,
        soc_quest2: DataTypes.INTEGER,
        soc_quest3: DataTypes.INTEGER,
        soc_quest4: DataTypes.INTEGER,
        soc_quest5: DataTypes.INTEGER,
        soc_quest6: DataTypes.INTEGER,
        soc_quest7: DataTypes.INTEGER,
        soc_quest8: DataTypes.INTEGER,
        soc_quest9: DataTypes.INTEGER,
        soc_quest10: DataTypes.INTEGER,
        soc_quest11: DataTypes.INTEGER,
        soc_quest12: DataTypes.INTEGER,
        soc_quest13: DataTypes.INTEGER,
        soc_quest14: DataTypes.INTEGER,
        soc_quest15: DataTypes.INTEGER,
        social_scale: DataTypes.INTEGER,
        createdAt: DataTypes.DATE
    });

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Profiles.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Profiles.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
    return Profiles;
  };