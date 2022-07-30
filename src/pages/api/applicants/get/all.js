//there is almost definitely a better place to put all this but i have no idea where
//initializeApp needs to be called only once, and db needs to be exported to the other endpoints
//feel free to refactor or to tell me how
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const serviceAccount = require('path-to-service-account-key.json');
// initializeApp({
//     credential: cert(serviceAccount)
//   });

const db = getFirestore();
export {db};

export default async function handler(req, res) {
    if(req.method !== 'GET')
    {
      res.status(405).send({message: 'Only GET requests at this endpoint, please'})
      return;
    }
    const snapshot = await db.collection('applicants').get();
    res.status(200).json(JSON.stringify(snapshot.docs.map(doc => doc.data())));
}