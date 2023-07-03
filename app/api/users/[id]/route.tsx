// import { NextResponse } from "next/server"
// import { PrismaClient } from "@prisma/client"

// export const GET = async (req: Request, res: Response) => {
//     console.log(`GET request received: ${req.url}`)
//     return NextResponse.json({ message: `GET request received` });

//     // Although Response.json() is valid, native TypeScript types currently show an error,
//     // so we use NextResponse.json() instead.
// }

import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {

    const id = request.url.split('/').pop()
    return NextResponse.json({ message: `GET request received for user ${id}` })
    // Although Response.json() is valid, native TypeScript types currently shows an error, 
    // you can use NextResponse.json() for typed responses instead.
}

export async function POST(request: Request) {
    const body = await request.json()
    return NextResponse.json({ message: `POST request received for user ${body.email}` })
}   
