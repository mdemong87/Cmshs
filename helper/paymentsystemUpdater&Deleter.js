
import connectDb from "../mongoDB/connectDb";
import { PHistory } from "../mongoDB/models/models";

export async function paymentSystemUpdater(dataobject) {


    //update the own systems
    connectDb();
    try {
        await PHistory.create(dataobject);
        return true;

    } catch (err) {
        return false;
    }


}




export async function paymentSystemDeleter(orderId) {


    //update the own systems
    connectDb();
    try {
        const deleteOne = await PHistory.deleteOne({ order_id: orderId });

        if (deleteOne && deleteOne.deletedCount > 0) {
            return true; // Return true if the order was deleted
        } else {
            return false; // Return false if no matching order found for deletion
        }


    } catch (err) {
        return false;
    }

}

export async function paymentSystemUpdateWhenThePaymentIsComplate(orderId, status) {

    const senddata = {
        status: status
    }

    //update the own systems
    connectDb();
    try {
        const updateResult = await PHistory.updateOne({ order_id: orderId }, senddata);

        if (updateResult.nModified > 0) {
            return true; // Return true if the order was deleted
        } else {
            return false; // Return false if no matching order found for deletion
        }


    } catch (err) {
        return false;
    }

}