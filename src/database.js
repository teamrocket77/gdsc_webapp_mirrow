import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';

export let firestoreApp = !getApps().length ? initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
    privateKey: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
  }),
  databaseURL: process.env.FIRESTORE_SERVICE_DATABASE_URL
}, "COMMON") : getApp("COMMON");