import prisma from "../libs/prisms.js";

// export const getStudents = async (req, res) => {
//     try {
//         res.status(200).json({
//             success: true,
//             message: "Students fetched successfully"
//         })

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// };

export const createStudent = async (req, res) => {
    try {
        const data = req.body;
        const newStudent = await prisma.student.create({
            data
        })
        res.status(201).json({
            success: true,
            message: "student successfully created",
            newStudent
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

export const getStudents = async (req, res) => {
    try {
        const students = await prisma.student.findMany()
        res.status(200).json({
            success: true,
            message: "Student successfully fatched",
            students
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updateStudent = await prisma.student.update({
            where: { id },
            data
        })
        res.status(200).json({
            success: true,
            message: "data successfully fatched",
            updateStudent
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const deleteStudent = await prisma.student.delete({
            where: {id},
        })
        res.status(200).json({
            success:true,
            message: "data successfully deleted",
            deleteStudent
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}