import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Project = sequelize.define(
    'projects',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        name:{
            type: DataTypes.STRING,
        },
        priority:{
            type:DataTypes.STRING,
        }
    },
    {
        timestamps: false
    }
)