// import prisma from "./src/libs/prisms.js"
// import app from "./src/app.js"
// import "dotenv/config"

// const PORT = process.env.PORT || 5000;

// const newServer = async () => {
//     try {
//         await prisma.$connect()
//         console.log("data connected successfully")
//         app.listen(PORT, () => {
//             console.log(`local server is running on port ${PORT}`)
//         })

//     } catch (error) {
//         console.log("server startup failled", error)
//         await prisma.$disconnect()
//         process.exit(1)
//     }
// }

// newServer()


import app from "./src/app.js"
import prisma from "./src/libs/prisms.js"
import "dotenv/config"

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await prisma.$connect()
        console.log("data connected successfully")
        app.listen(PORT,()=>{
            console.log(`Local server is running on port ${PORT}`)
        })
    }catch(error){
        console.log("server startup error", error)
        await prisma.$disconnect()
        process.exit(1)
    }
}

startServer()