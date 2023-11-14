import deletePending from "../../../controllers/studentsControllers/pandinController/deletePending";
import getPending from "../../../controllers/studentsControllers/pandinController/getPanding";
import putPending from "../../../controllers/studentsControllers/pandinController/putPanding";

export default function pandingHandler(req, res) {
    const method = req.method;
    switch (method) {
        case "GET":
            getPending(req, res);
            break;
        case "PUT":
            putPending(req, res);
            break;
        case "DELETE":
            deletePending(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }

}