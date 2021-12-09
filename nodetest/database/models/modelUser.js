import {sequelize} from "../dbstate.js";
import pkg from 'sequelize';
const {DataTypes} = pkg;


export const User = sequelize.define(
    'User',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }
)