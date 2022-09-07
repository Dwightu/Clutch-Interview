import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { Task } from "./Tasks.js";

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
            // defaultValue: "underfined"
        },
        description:{
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    }
)

Project.hasMany(Task,{
    foreinkey:"projectId",
    sourceKey:"id",
})
Task.belongsTo(Project,{
    foreinkey:"projectId",
    targetId:"id"
});