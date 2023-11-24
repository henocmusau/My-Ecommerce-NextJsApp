import { Schema, model, models } from "mongoose";

export interface CurrencyType {
    id: string,
    label: string,
    symbol: string
}

const currencySchema = new Schema<CurrencyType>({
    symbol: {
        type: String,
        enum: {
            values: ['CDF', '$', 'EUR'],
            message: 'Les valeurs autorisées pour le symbole sont : CDF, EUR et $.'
        },
        required: [true, 'Le nom de la dévise est réquis'],
        unique: true
    },

    label: {
        type: String,
        required: [true, 'Le label de la dévise est réquis.'],
        min: [1, 'Le label de la dévise ne peut être vide'],
        trim: true
    }
});

export const Currency = models.Currency || model<CurrencyType>('Currency', currencySchema)