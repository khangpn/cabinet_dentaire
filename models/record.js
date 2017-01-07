"use strict";

module.exports = function(sequelize, DataTypes) {
  var Record = sequelize.define('record', {
      //date: { 
      //  type: DataTypes.DATEONLY, 
      //  allowNull: false,
      //  validate: {
      //    notEmpty: {
      //      msg: "Record date is required"
      //    }
      //  }
      //},
      //time: { 
      //  type: DataTypes.TIME, 
      //  allowNull: false,
      //  validate: {
      //    notEmpty: {
      //      msg: "Record time is required"
      //    }
      //  }
      //},
      place: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      consulation: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      code_inami: { 
        type: DataTypes.STRING,
        allowNull: true
      },
      total_fee: { 
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notEmpty: {
            msg: "Total fee is required"
          }
        }
      },
      received_fee: { 
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notEmpty: {
            msg: "Received amount is required"
          }
        }
      },
      transferred_fee: { 
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notEmpty: {
            msg: "Transferred amount is required"
          }
        }
      },
      remained_fee: { 
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notEmpty: {
            msg: "Remained amount is required"
          }
        }
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
          Record.belongsTo(models.patient, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: false
            }
          });
        }
      },
      instanceMethods: {
        addPrice: function(subTotal) {
          if (typeof(price) === 'number' && subTotal > 0) {
            var oldTotal = this.total_price;
            this.setDataValue("total_price",  subTotal + oldTotal);
          }
        }
      }
    }
  );

  return Record;
};
