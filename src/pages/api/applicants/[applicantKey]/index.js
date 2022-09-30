import { firestoreApp  } from '../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = getFirestore(firestoreApp);

export default async function handler(req, res) {
  if(req.method !== 'GET')
  {
    res.status(405).send({message: 'Only GET requests at this endpoint, please'})
    return;
  }
  var query = req.query
  const {applicantKey} = query
  const docref = await Firestore_Database.collection('applicants').doc(applicantKey.toLowerCase()).get();
  if(docref.data() == undefined)
  {
    res.status(404).send({message: 'Applicant with this key could not be found.'})
  }
  else{
    res.status(200).json(docref.data())
  }
}