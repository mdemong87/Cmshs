import { NextResponse } from "next/server";

export const config = {
    runtime: "experimental-edge"
}



export default async function handler(req) {
    try {


        return NextResponse.json({
            messge: 'This is edge function',
            success: true
        }, {
            status: 200
        })

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
