import connectDb from "../../../../mongoDB/connectDb";
import { PaymentController } from "../../../../mongoDB/models/models";

function hanlder(req, res) {

    const method = req.method;

    switch (method) {
        case "GET":
            forget(req, res);
            break;
        case "PUT":
            foredit(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }


}
export default hanlder;



async function forget(req, res) {
    try {
        connectDb();
        const data = await PaymentController.find({}).exec();
        res.status(200).json({
            success: true,
            payment: data
        });
    } catch (err) {
        console.error("An error occurred:", err);
        res.status(500).json({
            success: false,
            error: "There was a server side problem"
        });
    }
}






async function foredit(req, res) {
    try {
        const { id, classes, schemaState } = req.body;

        connectDb();

        const newData = {
            classes: classes,
            Monthly: schemaState.monthly,
            Exam: schemaState.exam,
            Section: schemaState.section,
            Course: schemaState.course,
            Markshit: schemaState.markshit,
            Registrations: schemaState.registrations,
            Testimonial: schemaState.testimonial,
            DepartmentChange: schemaState.departmentChange,
            Admission: schemaState.admission,
            AdmissionFrom: schemaState.admissionFrom,
            Others: schemaState.others,
            OralExam: schemaState.oralExam,
            Central: schemaState.central,
            InternalSports: schemaState.internalSports,
            NationalSports: schemaState.nationalSports,
            commonRoom: schemaState.commonRoom,
            Magagin: schemaState.magagin,
            InstituteDepartment: schemaState.instituteDepartment,
            Library: schemaState.library,
            Labratory: schemaState.labratory,
            Fine: schemaState.fine,
            utility: schemaState.utility,
            WelcomeFree: schemaState.welcomeFree,
            EducationlTravel: schemaState.educationalTravel,
            Delay: schemaState.delay
        }

        PaymentController.findByIdAndUpdate(id, newData, (err, updatedData) => {
            if (!err) {
                res.status(200).json({
                    success: true,
                    message: "Updated Successfully",
                    data: updatedData
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: "Update was failed!"
                });
            }
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error!"
        });
    }
}
