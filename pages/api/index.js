import connectDb from "../../mongoDB/connectDb";
import { Employee, Student } from "../../mongoDB/models/models";



export default async function handler(req, res) {
  try {
    // Connect to the database
    connectDb();

    // Fetch students with status true
    const student = await Student.find({ status: true });

    // Fetch all teachers
    const teacher = await Employee.find();

    // Calculate the lengths
    const studentLength = student.length;
    const teacherLength = teacher.length;

    // Send a successful response
    res.status(200).json({
      student: studentLength,
      teacher: teacherLength,
      earning: "10000",
      success: true
    });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "There was a server side error" });
  }
}
