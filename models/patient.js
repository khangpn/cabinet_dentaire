"use strict";

module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define('patient', {
      firstname: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "First name is required"
          },
          len: {
            args: [1, 128],
            msg: "First name should be from 1 to 128 characters length"
          }
        }
      },
      lastname: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Last name is required"
          },
          len: {
            args: [1, 128],
            msg: "Last name should be from 1 to 128 characters length"
          }
        }
      },
      birthday: { 
        type: DataTypes.DATEONLY, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Birthday is required"
          }
        }
      },
      sex: { 
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true //true: male, false: female
      },

      // ADDRESS
      street: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Street is required"
          },
          len: {
            args: [1, 128],
            msg: "Street name should be from 1 to 128 characters length"
          }
        }
      },
      house_number: { 
        type: DataTypes.INTEGER, 
        isDecimal: true,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "House number is required"
          }
        }
      },
      post_number: { 
        type: DataTypes.INTEGER, 
        isDecimal: true,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Post number is required"
          }
        }
      },
      postal_code: { 
        type: DataTypes.INTEGER, 
        isDecimal: true,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Postal Code is required"
          }
        }
      },
      city: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "City is required"
          },
          len: {
            args: [1, 128],
            msg: "City should be from 1 to 128 characters length"
          }
        }
      },
      phone: { 
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          //notEmpty: {
          //  msg: "Phone number is required"
          //},
          isNumeric: {
            msg: "Phone number must be numeric"
          }
        }
      },
      gsm: { 
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          //notEmpty: {
          //  msg: "GSM number is required"
          //},
          isNumeric: {
            msg: "GSM number must be numeric"
          }
        }
      },

      email: { 
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      photo: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      mutuality: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      note: { 
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    { 
      underscored: true,
      freezeTableName: true,
      classMethods: {
        associate: function(models) {
          // For future, if the patient can use the system
          //Patient.belongsTo(models.account, {
          //  onDelete: "CASCADE",
          //  foreignKey: {
          //    allowNull: false
          //  }
          //});
          Patient.hasMany(models.record, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );

  return Patient
};
