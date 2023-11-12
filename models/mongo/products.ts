import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Désolé, le titre ne peut pas être nul.'],
        minLength: [5, 'Désolé, le titre doit avoir au moins 5 caractères'],
    },
    description: {
        trim: true,
        type: String,
        minLength: [5, 'Désolé, la description doit avoir au moins 10 caractères'],
    },
    type: {
        type: Number,
        required: [true, 'Le type du produit ne peut pas être nul.'],
    },
    image: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'Il est impératif d\'inclure une image descriptif de l\'article']
    },
    devise: {
        type: 'ObjectId',
        ref: 'Devise',
        required: [true, 'Chaque article doit avoir une dévise'],
    },
    price: {
        type: Number,
        required: [true, 'Le prix du produit ne peut pas être nul.'],
        min: [10, 'Le prix du produit ne peut pas être inférieur à 10$.']
    },
    creator: {
        type: 'ObjectId',
        ref: 'Creator',
        required: [true, 'Chaque article doit appartenir à une personne'],
    }
}, { timestamps: true });

export const Product = models.Product || model('Product', productSchema)

// const deviseSchema = new Schema({
//     label: {
//         type: String,
// enum: {
//     values: [
//         { label: 'Francs Congolais', symbol: 'CDF' },
//         { label: 'Dollars Américains', symbol: '$' },
//     ],
//     message: 'Les deux valeurs autorisées pour le symbole sont : CDF et $.'
// },
// required: [true, 'Le nom et le symbole de la dévise sont réquis'],
// unique: true
//     }
// });

// export const Devise = model('Devise', deviseSchema)