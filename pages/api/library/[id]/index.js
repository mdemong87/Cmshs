import { multipulfileDelete } from "../../../../helper/cloudinaryconfig";
import deletehelper from "../../../../helper/deletehelper";
import connectDb from "../../../../mongoDB/connectDb";
import { Library } from "../../../../mongoDB/models/models";



function hanlder(req, res) {

    const method = req.method;

    switch (method) {
        case "GET":
            forget(req, res);
            break;
        case "DELETE":
            fordelete(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }
}


export default hanlder;









async function forget(req, res) {

    try {
        const id = req.query.id;
        const singleData = await deletehelper(Library, id);

        res.status(200).json({
            success: true,
            data: singleData,
            messege: "Single book get successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "There was a server side problem"
        })
    }


}




async function fordelete(req, res) {

    const id = req.query.id;

    //database connection
    connectDb();




    const singleData = await deletehelper(Library, id);

    const thumnalsPublicId = singleData.thumnals.public_id;
    const booksPublicId = singleData.books.public_id;

    //delete file from cloudinary
    const publicIdsToDelete = [thumnalsPublicId, booksPublicId];
    const isdelete = await multipulfileDelete(publicIdsToDelete);


    if (isdelete) {
        //delete single data
        await Library.deleteOne({ _id: id }, (err) => {
            if (!err) {
                res.status(200).json({
                    success: true,
                    messege: "Book delete successfully"
                })

            } else {
                res.status(500).json({
                    success: false,
                    error: "There was a server side problem"
                })
            }
        }).clone()

    } else {
        res.status(500).json({
            success: false,
            error: "There was a server side problem"
        })
    }
}