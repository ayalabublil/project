import express from "express";
import { User } from  "../controller/user.js";
const userRouter = express.Router();
const userController = new User();

 
userRouter.get("/",userController.getAll )
userRouter.get("/:t_z",userController.get )
userRouter.post("/",userController.add )
userRouter.delete("/:t_z",userController.delete )
userRouter.put("/:t_z",userController.put )



export { userRouter };