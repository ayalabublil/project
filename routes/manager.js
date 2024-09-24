import express from "express";
import { Manager } from  "../controller/users.js";
const userRouter = express.Router();
const userController = new User();

 
userRouter.get("/",userController.getAll )
userRouter.get("/:password",userController.get )
userRouter.post("/",userController.add )
userRouter.delete("/:password",userController.delete )
userRouter.put("/:password",userController.put )



export { userRouter };