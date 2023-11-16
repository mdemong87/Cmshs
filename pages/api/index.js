import connectDb from "../../mongoDB/connectDb";
import { Employee, PHistory, Student } from "../../mongoDB/models/models";



export default async function handler(req, res) {
  try {
    // Connect to the database
    connectDb();

    // Fetch students with status true
    const student = await Student.find({ status: true });

    // Fetch all employee
    const employee = await Employee.find();

    //fetch all paymentdata
    const paymenthistory = await PHistory.find();

    // Calculate the lengths
    const studentLength = student.length;
    const employeeLength = employee.length;






    // Send a successful response
    res.status(200).json({
      student: studentLength,
      employee: employeeLength,
      earning: paymenthistory,
      success: true
    });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "There was a server side error" });
  }
}
