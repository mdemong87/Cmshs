import getController from "../../../controllers/studentsControllers/getController";
import postController from "../../../controllers/studentsControllers/postController";
import putController from "../../../controllers/studentsControllers/putController";



export default function studentsHandler(req, res) {
    const method = req.method;
    switch (method) {
        case "GET":
            getController(req, res);
            break;
        case "POST":
            postController(req, res);
            break;
        case "PUT":
            putController(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }

}


export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb' // Set desired value here
        }
    }
}