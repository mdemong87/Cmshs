export default function paymentHandler(req, res) {

    const method = req.method;
    switch (method) {
        case "GET":


            break;
        case "PUT":

            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }

}