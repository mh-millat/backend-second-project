// import express from "express";
// import cors from "cors";
// import studentRoute from "./routes/student.route.js"

// const app = express();
// app.use(cors());
// app.use(express.json());



// // student routes
// app.use("/api/students", studentRoute)

// app.get("/", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "backend is running"
//     })

// })

// export default app;


import express from "express"
import cors from "cors"
import Router from "./routes/student.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/students", Router)


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "bakend server is running"
    })
})

export default app;