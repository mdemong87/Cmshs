
import cookie from "cookie";

function logOut(req, res) {


    res.setHeader("Set-Cookie", cookie.serialize("logedIn", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
        sameSite: 'strict',
        path: "/"

    }));

    res.status(200).json({
        success: true,
        messege: "Logout successfully"
    })

}


export default logOut;