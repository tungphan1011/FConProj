// models/Status.js
import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Status extends Model {}

Status.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id',
        },
    },
    condition: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Status',
    tableName: 'Status',
    timestamps: false,
});

module.exports = Status;
