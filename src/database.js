const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('C:\\Users\\mbjmc\\Documents\\projects\\Webapp\\src\\gdsc-site-testing-1cc9b6487e3f.json');
const admin = require('firebase-admin');
if(!admin.apps.length) {//probably better way to do this, if you know @ me
  initializeApp({
    credential: cert(serviceAccount)
  });
}

const db = getFirestore();
export { db };