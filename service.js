
import express from "express";
import cors from 'cors'
const app = express();
const port = process.env.PORT | 3001
app.use(cors());
app.use(express.json());
import {userRouter} from './routes/user.js'

app.listen(port, () => {
    //  console.log( process.env)
    console.log(`Example app listening on port ${port}`)
})
app.get("/",(req,res)=>{
    res.send("hello express")
});
app.get("/user",userRouter);

