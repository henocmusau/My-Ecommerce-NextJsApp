import { NextResponse } from "next/server";

export function returnMessage(datas: any) {
    if (!datas) return NextResponse.json({ error: 'Une erreur inattendue est survenue' }, { status: 400 })
    if (datas.error) return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
    return NextResponse.json({ datas }, { status: 201 })
}

export function mongoError(error: any, customMessage: string) {
    if (error?.code === 11000) return NextResponse.json({ error: customMessage }, { status: 400 })
}