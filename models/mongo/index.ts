import { connect } from 'mongoose'

import { Currency } from './currency';
import { Product } from './products';
import { Creator } from './creator';

// function dbURI  {
//     if (process.env.NODE_ENV !== 'production') return 'mongodb://127.0.0.1:27017/blackx'
// return 'mongodb+srv://henocmusau:suvPnZOoq1G5Ji0Y@cluster0.jmmupet.mongodb.net/?retryWrites=true&w=majority'
// }
// const uri = dbURI()

(async function dbConnection() {
    try {
        await connect('mongodb+srv://henocmusau:suvPnZOoq1G5Ji0Y@cluster0.jmmupet.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to Database : BlackX')
    } catch (error) {
        console.log('Une erreur de base des données est survenue')
        throw error
    }
})()

// dbConnection()

export { Currency, Product, Creator }