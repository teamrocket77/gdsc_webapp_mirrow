import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Configure Environmental Variables.
const dotenv = require('dotenv');
dotenv.config();

// Configure Authentication Provider.
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: process.env.GOOGLE_AUTHORIZATION_URL
        }),
    ],
    secret: process.env.SECRET,
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
            if(url === '/profile') {
                return Promise.resolve('/');
            }
            return Promise.resolve('/');
        }
    },
    pages: {
        error: '/auth/error'
    }
})