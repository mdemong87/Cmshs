import cookie from "cookie";

async function logIn(req, res) {

    const { emailfiled, passFiled, LogedIn } = req.body;

    const email = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    const password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;


    if (emailfiled === email && passFiled === password) {

        res.setHeader("Set-Cookie", cookie.serialize("logedIn", LogedIn, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60,
            sameSite: 'strict',
            path: "/"

        }));

        res.status(200).json({
            success: true,
            messege: "Login successfully"
        });


    } else {
        res.status(401).json({
            success: false,
            error: "Unauthenticated user"
        })
    }




}


export default logIn;