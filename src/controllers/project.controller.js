import { Project } from "../models/Project.js";

export async function createProject(req,res){
    const {name,description,priority,deliveryDate}=req.body;
    try{
        let newProject=await Project.create({
            name,priority,description,deliveryDate:new Date(deliveryDate).getTime(),
        },
        {
            fields:["name","priority","description","deliverydate"],
        })
        await res.json(newProject);
    }catch(err){

    }
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


export async function getOneProject(req,res){
    const {id}=req.params;
    try{
        const project=await Project.findByPk(id);
        res.json(project);
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

export async function updateProject(req,res){
    const {id}=req.params;
    const { name, priority, description } = req.body;
    try{
        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();
        res.json(project);
    }catch(err){
        return res.status(500).json({ message: error.message });
    }

}

export async function deleteProject(req,res){
    const {id}=req.params;
    try{
        await Project.destroy({
            where:{
                id,
            }
        })
        // Delete project
        return res.sendStatus(204);
    }catch(err){
        return res.status(500).json({ message: error.message });
    }
}