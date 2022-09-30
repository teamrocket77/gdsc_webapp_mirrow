import { firestoreApp  } from '../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = getFirestore(firestoreApp);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const snapshot = await Firestore_Database.collection('events').get();
        res.status(200).json(JSON.stringify(snapshot.docs.map(doc => doc.data())));
    }
}

// Event (id: int)
// -> title: (string)
// -> location: (hyperlink: string)
// -> time: (string)
// -> description: (string)
// -> calendarLink: (hyperlink: string) 
