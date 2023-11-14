import deleteSingleConller from "../../../controllers/studentsControllers/singleStudentController/deleteSingleConller";
import getSingleController from "../../../controllers/studentsControllers/singleStudentController/getSingleController";
import putSingleController from "../../../controllers/studentsControllers/singleStudentController/putSingleController";


export default function SingleStudentHandler(req, res) {
    const method = req.method;

    switch (method) {
        case "GET":
            getSingleController(req, res);
            break;
        case "PUT":
            putSingleController(req, res);
            break;
        case "DELETE":
            deleteSingleConller(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }
}
