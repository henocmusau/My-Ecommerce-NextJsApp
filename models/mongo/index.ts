import { connect } from 'mongoose'

import { Currency } from './currency';
import { Product } from './products';
import { Creator } from './creator';
import { ProductType } from './productsType';

// (async function dbConnection() {
try {
    if (process.env.DATABASE_URI && typeof process.env.DATABASE_URI === 'string') {
        connect(process.env.DATABASE_URI);
        console.log('Connected to Database : BlackX')
    } else {
        console.log("L'URI de la base des données est introuvable ou n'est pas une chaine des caractères")
    }
} catch (error) {
    console.log('Une erreur est survenue lors de la connexion à la base des données')
    throw error
}
// })()

export { Currency, Product, Creator, ProductType }