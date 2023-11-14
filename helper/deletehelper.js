import connectDb from "../mongoDB/connectDb";


async function deletehelper(someModel, someId) {

    try {
        connectDb();
        const result = await someModel.findOne({ _id: someId });
        // Handle the result here
        return result;
    } catch (error) {
        // Handle any errors here
        return error;
    }

}

export default deletehelper;