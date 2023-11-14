import connectDb from "../../../mongoDB/connectDb";
import { Student } from "../../../mongoDB/models/models";

async function putSingleController(req, res) {

    try {

        const {
            fName,
            lName,
            bName,
            bloodGroup,
            dateOFbrith,
            brithregi,
            gender,
            quata,
            wadmit,
            sContact,
            faterName,
            moterName,
            religion,
            residance,
            fOccupation,
            mOccupation,
            fmIncome,
            mmIncome,
            fpNumber,
            mpNumber,
            fEmail,
            mEmail,
            familyCall,
            prCountry,
            prDistrict,
            prDivision,
            prPost,
            prUnion,
            prUpazila,
            prVillage,
            psCountry,
            psDistrict,
            psDivision,
            psPost,
            psUnion,
            psUpazila,
            psVillage,
            registration,
            roll } = req.body;

        const { id } = req.query;


        const sendDatatoDatabseForUpdate = {
            fName,
            lName,
            bName,
            bloodGroup,
            dateOFbrith,
            brithregi,
            gender,
            quata,
            wadmit,
            sContact,
            faterName,
            moterName,
            religion,
            residance,
            fOccupation,
            mOccupation,
            fmIncome,
            mmIncome,
            fpNumber,
            mpNumber,
            fEmail,
            mEmail,
            familyCall,
            prCountry,
            prDistrict,
            prDivision,
            prPost,
            prUnion,
            prUpazila,
            prVillage,
            psCountry,
            psDistrict,
            psDivision,
            psPost,
            psUnion,
            psUpazila,
            psVillage,
            registration,
            roll
        }




        //connection database
        connectDb();

        //update database
        const updatedStudent = await Student.findByIdAndUpdate(id, sendDatatoDatabseForUpdate, { new: true });

        //send response to the front-end
        if (updatedStudent) {
            res.status(200).json({
                message: "Student Info updated successfully",
                success: true,
            });
        } else {
            res.status(500).json({
                error: "Student Info update Failed",
                success: false,
            });
        }
    } catch (error) {
        res.status(500).json({ error: "There was a server side error" });
    }

}



export default putSingleController;