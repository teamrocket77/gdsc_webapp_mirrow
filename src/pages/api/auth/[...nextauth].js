import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { setSessionCookie } from 'next-auth/react';

// Configure Authentication Provider.
export default NextAuth({
    options: process.env.NEXTAUTH_URL,
    providers: [
        
        // For Development
        process.env.NODE_ENV == "development" ? CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials, request) {
                if (credentials.username === "admin" && credentials.password === "admin") {
                    return {
                        id: 1,
                        name: 'admin',
                        email: 'admin@dscksu.club'
                    }
                }
                return null;
            }
        })

        // For Production
        : GoogleProvider({
            clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID,
            clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET,
            authorization: process.env.GOOGLE_PROVIDER_AUTHORIZATION_URL
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development" ? true : false,
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (user) {
              return true;
            }
            return false;
        },
        async signOut({ session }) {
            session.destroy();
        }, 
        // Session Expires in 30 minutes.
        async session({session, token, user}) {
            session.accessToken = token.accessToken;
            session.expires = Date.now()+(30*60*1000)
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        }
    }
})