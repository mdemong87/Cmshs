import { Student } from "../../../mongoDB/models/models";

export default function getSingleController(req, res) {

    const { id } = req.query;

    Student.findById({ _id: id }, (err, data) => {
        if (!err) {
            res.status(200).json(data)
        } else {
            res.status(500).json({ Error: "There was a server side Problem" })
        }
    });

}
