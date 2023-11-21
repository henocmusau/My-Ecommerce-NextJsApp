import { connect } from 'mongoose'

import { Currency } from './currency';
import { Product } from './products';
import { Creator } from './creator';

// (async function dbConnection() {
try {
    if (process.env.DATABASE_URI && typeof process.env.DATABASE_URI === 'string') {
        connect(process.env.DATABASE_URI);
        console.log('Connected to Database : BlackX')
    } else {
        console.log("L'URI de la base des données est introuvable ou n'est pas une chaine des caractères")
    }
    // await connect(process.env.NODE_ENV === 'production' ? 'mongodb+srv://henocmusau:suvPnZOoq1G5Ji0Y@cluster0.jmmupet.mongodb.net/?retryWrites=true&w=majority' : 'mongodb://127.0.0.1:27017/blackx');
} catch (error) {
    console.log('Une erreur est survenue lors de la connexion à la base des données')
    throw error
}
// })()

// dbConnection()

export { Currency, Product, Creator }