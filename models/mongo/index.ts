import { connect } from 'mongoose'

import { Devise } from './devise';
import { Product } from './products';
import { Creator } from './creator';

try {
    await connect('mongodb://127.0.0.1:27017/blackx');
    console.log('Connected to Database : BlackX')
} catch (error) {
    console.log('Une erreur de base des données est survenue')
    throw error
}

export { Devise, Product, Creator }