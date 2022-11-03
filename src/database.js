import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';

const dotenv = require('dotenv')

export let firestoreApp = !getApps().length ? initializeApp({
  credential: cert({
    //"type": process.env.FIREBASE_SERVICE_ACCOUNT_TYPE,
    projectId: process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
    //"private_key_id": process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
    privateKey: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    //"client_id": process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
    //"auth_uri": process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_URI,
    //"token_uri": process.env.FIREBASE_SERVICE_ACCOUNT_TOKEN_URI,
    //"auth_provider_x509_cert_url": process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
    //"client_x509_cert_url": process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL
  }),
  databaseURL: process.env.FIRESTORE_SERVICE_DATABASE_URL
}, "COMMON") : getApp("COMMON");
