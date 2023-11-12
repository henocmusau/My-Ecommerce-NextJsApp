import { Schema, model, models } from "mongoose";

const deviseSchema = new Schema({
    label: {
        type: String,
        enum: {
            values: ['CDF', '$', 'EUR'],
            message: 'Les valeurs autorisées pour le symbole sont : CDF, EUR et $.'
        },
        required: [true, 'Le nom de la dévise est réquis'],
        unique: true
    }
});

export const Devise = models.Devise || model('Devise', deviseSchema)