import { Schema, model, models } from "mongoose";

export interface ICreatorModel {
    firstName: string
    lastName: string
    image: string
    gender: string
    adress: {
        city: string
        street: string
    }
    idCardNumber: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
}

const creatorSchema = new Schema<ICreatorModel>({
    firstName: {
        type: String,
        required: [true, 'Le prénom est réquis'],
        minLength: [2, 'Le prénom doit avoir au moins 2 caractères'],
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: [true, 'Le nom de famille est réquis'],
        trim: true,
        minLength: [2, 'Le nom de famille doit avoir au moins 2 caractères'],
        lowercase: true,
    },
    image: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'L\'image est réquise']
    },
    gender: {
        type: String,
        trim: true,
        uppercase: true,
        enum: {
            values: ['M', 'F', 'O'],
            message: 'Les genres autorisés sont : male (M), femelle (F) et autre (O)'
        },
        required: [true, 'Le genre est réquis']
    },
    adress: {
        city: {
            type: String,
            trim: true,
            required: [true, "La ville est réquise"],
            minLength: [2, 'Le ville doit avoir au moins 2 caractères']
        },
        street: {
            type: String,
            trim: true,
            required: [true, 'L\'adresse est réquise'],
            minLength: [2, 'L\'adresse doit avoir au moins 2 caractères']
        }
    },
    idCardNumber: {
        type: String,
        trim: true,
        required: [true, 'Le numéro de la carte d\'identité est réquis'],
        minLength: [3, 'Le numéro de la carte d\'identité doit avoir au moins 2 caractères'],
        unique: true
    },
    phoneNumber: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'Le numéro de téléphone est réquis'],
        minLength: [5, 'Le numéro de téléphone doit avoir au moins 5 caractères'],
    }
}, { timestamps: true });

// creatorSchema.post('save', (error: any, doc: any, next: (err: Error) => void) => {
//     if (error.code === 11000) next(new MongooseError('Ce numéro de carte d\'identité est déjà utilisé'))
//     next(error)
// })

export const Creator = models.Creator || model('Creator', creatorSchema)