//This endpoint has been disabled for security reasons. As the code below stands, it would accept anyone's JSON and forward
//it directly to the database without any authentication or validation. Do not uncomment without implementing auth.

// import { firestoreApp  } from '../../../database';
// import { getFirestore } from 'firebase-admin/firestore';
// const Firestore_Database = getFirestore(firestoreApp);
// export default async function handler(req, res) {
//     if(req.method !== 'POST')
//     {
//       res.status(405).send({message: 'Only POST requests at this endpoint, please'})
//       return;
//     }
//     const newref = Firestore_Database.collection('applicants').doc(`${req.body.firstName}-${req.body.lastName}-${req.body.email}`.toLowerCase());
//     await newref.set(req.body);
//     res.status(200).send()
//   }