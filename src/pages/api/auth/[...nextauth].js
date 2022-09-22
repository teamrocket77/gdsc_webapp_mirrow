import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
//import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import { FirestoreAdapter } from '../../../temp_modules/firebase-admin-adapter';
import { firestoreApp } from '../../../database';

// Configure Environmental Variables.
// NODE_ENV is set to 'development' when 'npm run dev' in development mode.
// NODE_ENV is set to 'production' when 'npm start' in production mode.
// DEVELOPERS WILL ALWAYS BE IN DEVELOPMENT MODE.
const dotenv = require('dotenv');
dotenv.config({path: `.env.${process.env.NODE_ENV}`});
console.log('Environment Mode: '+process.env.NODE_ENV);

// Configure Authentication Provider.
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID,
            clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET,
            authorization: process.env.GOOGLE_PROVIDER_AUTHORIZATION_URL
        }),
    ],
    //adapter: FirebaseAdapter(firestore.app),
    adapter: FirestoreAdapter(firestoreApp.options),
    secret: process.env.AUTH_SECRET,
    jwt: {
        encryption: true
    },
    callbacks: {
        
        // Returns session token when callback is invoked.
        session: async({session, token}) => {
            return session;
        },

        // Manage redirect based on whether or not the user is logged in.
        // Also known as a protected routes. If the user is not logged in,
        // redirect (resolve) to the site's landing page ('/').
        redirect: async(url) => {
            return Promise.resolve('/');
        }
    },
    pages: {
        //error: '/auth/error'
    }
})