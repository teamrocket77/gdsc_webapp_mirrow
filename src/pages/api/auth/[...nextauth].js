import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';

// Configure Authentication Provider.
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID,
            clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET,
            authorization: process.env.GOOGLE_PROVIDER_AUTHORIZATION_URL
        }),
    ],
    adapter: FirestoreAdapter({
        apiKey: process.env.FIREBASE_USER_ACCOUNT_API_KEY,
        authDomain: process.env.FIREBASE_USER_ACCOUNT_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_USER_ACCOUNT_DATABASE_URL,
        projectId: process.env.FIREBASE_USER_ACCOUNT_PROJECT_ID,
        storageBucket: process.env.FIREBASE_USER_ACCOUNT_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_USER_ACCOUNT_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_USER_ACCOUNT_APP_ID,
        measurementId: process.env.FIREBASE_USER_ACCOUNT_MEASUREMENT_ID
    }),
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