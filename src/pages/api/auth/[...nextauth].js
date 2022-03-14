import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// Configure Environmental Variables.
const dotenv = require('dotenv');
dotenv.config();

// Configure Authentication Provider.
export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        }),
    ],
    jwt: {
        encryption: true
    },
    callbacks: {
        // Set Oauth access_Token to account access_token immediately after the client signs in.
        async jwt({token, account}) {
            if(account?.access_token) {
                token.accessToken = account.access_token;
            }
            return token;
        },

        // Pass properties (accessToken) to client.
        async session({session, token}) {
            session.accessToken = token.accessToken;
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
    }
})