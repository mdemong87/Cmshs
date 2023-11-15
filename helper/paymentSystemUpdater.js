
import connectDb from "../mongoDB/connectDb";
import { PHistory } from "../mongoDB/models/models";

async function paymentSystemUpdater(dataobject) {


    //update the own systems
    connectDb();
    try {
        await PHistory.create(dataobject);
        return true;

    } catch (err) {
        return false;
    }


}



export default paymentSystemUpdater;