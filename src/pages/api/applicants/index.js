import { firestoreApp  } from '../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = getFirestore(firestoreApp);

export default async function handler(req, res) {
    if(req.method !== 'GET')
    {
      res.status(405).send({message: 'Only GET requests at this endpoint, please'})
      return;
    }
    res.status(200).json(await getAllApplicants());
}
export async function getAllApplicants(){
    const snapshot = await Firestore_Database.collection('applicants').get();
    return snapshot.docs.map(doc => doc.data());
}