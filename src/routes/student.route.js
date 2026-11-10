// import express from "express";
//  const router = express.Router()

//  router.get("/",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         message: "student route is working"
//     })
//  })

//  export default router;


// import express from "express"
// const Router = express.Router()

// Router.get("/", (req,res)=>{
//     res.status(200).json({
//         success: true,
//         message: "student route is working"
//     })
// })
// export default Router

import express from "express"
import { getStudents, updateStudent, deleteStudent, createStudent } from "../controller/student.controller.js"

const Router = express.Router()

// Router.get("/",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         message: "studen router is running"
//     })
// })

Router.get("/", getStudents)
Router.post("/", createStudent)
Router.put("/:id", updateStudent)
Router.delete("/:id", deleteStudent)

export default Router;
