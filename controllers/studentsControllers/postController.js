import { customAlphabet } from "nanoid";
import { photoUpload } from "../../helper/cloudinaryconfig";
import connectDb from "../../mongoDB/connectDb";
import { Student } from "../../mongoDB/models/models";


async function postController(req, res) {
    try {

        const { fName,

            lName,

            bName,

            wadmit,

            faterName,

            moterName,

            sContact,

            brithregi,

            bloodGroup,

            quata,

            residance,

            gender,

            religion,

            fOccupation,

            mOccupation,

            fmIncome,

            mmIncome,

            fpNumber,

            mpNumber,

            fEmail,

            mEmail,

            prCountry,

            prDivision,

            prDistrict,

            prUpazila,

            prUnion,

            prPost,

            prVillage,

            psCountry,

            psDivision,

            psDistrict,

            psUpazila,

            psUnion,

            psPost,

            psVillage,

            familyCall,

            photo,

            dateOFbrith

        } = req.body;


        //database connection here
        connectDb();


        //nanoid initial
        const customid = customAlphabet("1234567890", 6);
        const uid = customid();
        //just ensure that same Id does not repecte twice
        const isexiste = await Student.findOne({ customid: uid });
        const newId = isexiste == null ? uid : customid();

        const fData = {
            fName,

            lName,

            bName,

            wadmit,

            faterName,

            moterName,

            sContact,

            brithregi,

            bloodGroup,

            quata,

            residance,

            gender,

            religion,

            fOccupation,

            mOccupation,

            fmIncome,

            mmIncome,

            fpNumber,

            mpNumber,

            fEmail,

            mEmail,

            prCountry,

            prDivision,

            prDistrict,

            prUpazila,

            prUnion,

            prPost,

            prVillage,

            psCountry,

            psDivision,

            psDistrict,

            psUpazila,

            psUnion,

            psPost,

            psVillage,

            familyCall,

            file: await photoUpload(photo, "studentsPhoto", 300, "scale"),

            dateOFbrith,

            customid: newId
        }



        //create a new recoard
        const student = await Student.create(fData);

        res.status(200).json({
            success: true,
            message: "Application submitted successfully",
            student: student,
        });
    } catch (err) {

        res.status(500).json({
            success: false,
            error: "There was a server side problem",
        });
    }
}

export default postController;
