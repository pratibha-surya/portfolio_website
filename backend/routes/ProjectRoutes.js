
import express from "express"
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } from "../controller/ProjectController.js"
const router=express.Router()
router.get("/",getAllProjects)
router.post("/",createProject)
router.get("/:id",getProjectById)
router.put("/:id",updateProject)
router.delete("/:id",deleteProject)
 export default router