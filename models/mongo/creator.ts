import { Schema, model, models } from "mongoose";

const creatorSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Le prénom est réquis'],
        minLength: [2, 'Le prénom doit avoir au moins 2 caractères']
    },
    lastName: {
        type: String,
        required: [true, 'Le nom de famille est réquis'],
        minLength: [2, 'Le nom de famille doit avoir au moins 2 caractères']
    },
    image: {
        type: String,
        required: [true, 'L\'image est réquise']
    },
    gender: {
        type: String,
        enum: {
            values: ['M', 'F', 'O'],
            message: 'Les genres autorisés sont : male, femelle et autre'
        },
        required: [true, 'Le genre est réquis']
    },
    adress: {
        city: {
            type: String,
            required: [true, "La ville est réquise"],
            minLength: [2, 'Le ville doit avoir au moins 2 caractères']
        },
        street: {
            type: String,
            required: [true, 'L\'adresse est réquise'],
            minLength: [2, 'L\'adresse doit avoir au moins 2 caractères']
        }
    },
    idCardNumber: {
        type: String,
        // required: [2, 'Le numéro de la carte d\'identité est réquis'],
        minLength: [true, 'Le numéro de la carte d\'identité doit avoir au moins 2 caractères'],
        unique: true
    },
    phoneNumber: {
        type: String,
        required: [true, 'Le numéro de téléphone est réquis'],
        minLength: [5, 'Le numéro de téléphone doit avoir au moins 5 caractères'],
    }
}, { timestamps: true });

// creatorSchema.post('save', (error: any, doc: any, next: (err: Error) => void) => {
//     if (error.code === 11000) next(new MongooseError('Ce numéro de carte d\'identité est déjà utilisé'))
//     next(error)
// })

export const Creator = models.Creator || model('Creator', creatorSchema)