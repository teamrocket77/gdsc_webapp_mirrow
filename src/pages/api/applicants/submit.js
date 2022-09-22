import { firestoreApp } from '../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = getFirestore(firestoreApp);
//hypothetically this would also work pretty much like a PATCH request
//since the DB key is taken from the request body itself
export default async function handler(req, res) {
    if(req.method !== 'POST')
    {
      res.status(405).send({message: 'Only POST requests at this endpoint, please'})
      return;
    }
    //not sure how to sanity-check that these properties exist in the request body, but that should be done here
    const newref = Firestore_Database.collection('applicants').doc(`${req.body.firstName}-${req.body.lastName}-${req.body.email}`.toLowerCase());
    await newref.set(req.body);
    res.status(200).send()
  }