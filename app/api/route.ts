import { Devise } from "@/models/mongo";
// import { Devise } from "@/models/mongo/devise";
// import { Creator } from "@/models/mongo/creator";
import { NextResponse } from "next/server";
import { mongoError, returnMessage } from "./globalMessages";

export async function GET(req: Request) {

    try {
        // const { devise } = await req.json()
        /*const datas = await Product.create({
            title: 'Iphone 23 Ultra',
            type: 1,
            price: 200,
        })*/
        // console.log(devise)

        // const datas = await Devise.create({ label: devise.toString() })
        const datas = await Devise.find()
        // const datas = await Product.find().populate('devise')
        /*const datas = await Product.create({
            title: 'Tecno POP 7',
            type: 1,
            price: 8,
            devise: {
                _id: '654ab97e1ba1c39ea487c3a5'
            }
        })*/
        return returnMessage(datas)

    } catch (error: any) {
        console.log(error?.message)
        if (error?.code === 11000) return NextResponse.json({ error: 'Dévise existant' }, { status: 400 })
        return NextResponse.json({ error }, { status: 400 })
    }
}

export async function POST(req: Request) {
    try {
        // const { firstName, lastName, idCardNumber, street, city, image, phoneNumber, gender } = await req.json()
        const { devise } = await req.json()

        // const datas = await Creator.create({
        //     firstName,
        //     lastName,
        //     gender,
        //     idCardNumber,
        //     phoneNumber,
        //     image,
        //     adress: {
        //         city, street
        //     }
        // })

        const datas = await Devise.create({ label: devise.toString() })
        return returnMessage(datas)

        // console.log('User ' + datas?.id + ' created successfull')
        // return NextResponse.json({ datas }, { status: 201 })

    } catch (error: any) {
        if (error?.code === 11000) return mongoError(error, 'Cette dévise existe déjà !')
        return NextResponse.json({ error: error }, { status: 400 })
    }
}