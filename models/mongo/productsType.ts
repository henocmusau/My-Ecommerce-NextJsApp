import { Schema, model, models } from "mongoose";

export interface ProductType {
    label: string,
    slug: string
}

const productTypeSchema = new Schema<ProductType>({
    label: {
        type: String,
        required: [true, 'Le type de produit doit avoir un nom'],
        minlength: [2, 'Le type de produit doit avoir au moins deux (2) caractères'],
        unique: true
    },
    slug: {
        type: String,
        unique: true,
        required: [true, 'Le type de produit doit avoir un slug'],
        minlength: [2, 'Le slug doit avoir au moins deux (2) caractères'],
        lowercase: true
    }
});

export const ProductType = models.ProductType || model<ProductType>('ProductType', productTypeSchema)