import { Router } from "express";

import { getProjects,createProject,getOneProject,updateProject,deleteProject } 
from "../controllers/project.controller.js";

const router=Router();

router.get('/',getProjects)
router.post('/',createProject);
router.get('/:id',getOneProject);
router.post('/:id',updateProject);
router.delete("/:id", deleteProject);


export default router;