import { fileDelete, photoUpload } from "../../../../helper/cloudinaryconfig";
import deletehelper from "../../../../helper/deletehelper";
import connectDb from "../../../../mongoDB/connectDb";
import { Gallery } from "../../../../mongoDB/models//models";


async function handler(req, res) {
    const method = req.method;
    connectDb();

    try {
        if (method == "POST") {
            const { file } = req.body;

            const uploaded = await photoUpload(file, "schoolwebphoto", 300, "scale");

            const alldata = {
                file: uploaded
            }

            console.log(alldata);

            const data = await Gallery.create(alldata);
            res.status(200).json({
                success: true,
                message: "Gallery Upload successful",
                gallery: data,
            });


        } else if (method == "DELETE") {
            const id = req.body;

            const singleData = await deletehelper(Gallery, id);

            //delete file from cloudinary
            const isdelete = await fileDelete(singleData);

            if (isdelete) {
                //delete single data
                await Gallery.deleteOne({ _id: id }, (err) => {
                    if (!err) {
                        res.status(200).json({
                            success: true,
                            error: "Gallery delete successfully"
                        })

                    } else {
                        res.status(500).json({
                            success: false,
                            error: "There was a server side problem"
                        })
                    }
                }).clone()
            }


        } else if (method == "GET") {
            const data = await Gallery.find({}).exec();
            res.status(200).json({
                success: true,
                gallery: data,
            });
        } else {
            res.status(405).json({ error: "Method not allowed" });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({
            success: false,
            error: error.message || "Internal Server Error",
        });
    }
}

export default handler;
