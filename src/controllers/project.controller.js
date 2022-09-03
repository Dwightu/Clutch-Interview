import { Project } from "../models/Project.js";

export async function createProject(req,res){

}


export async function getProjects(req,res){
    try{
        const projects=await Project.findAll({
            atributes: ["id", "name", "priority", "description"],
        });
        res.json(projects);
    }catch(err){
        res.status(500).json({
            message: error.message,
        });
    }
}
