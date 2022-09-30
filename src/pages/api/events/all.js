import { firestoreApp  } from '../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = getFirestore(firestoreApp);

export async function getAllEvents() {
    const snapshot = await Firestore_Database.collection('events').get();
    return snapshot.docs.map(doc => doc.data());
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(await getAllEvents().then(function(data) { return data }));
    }
}

// Event (id: int)
// -> title: (string)
// -> location: (map)
//  -> type: (string)
//  -> data: (string)
// -> date: (map)
//  -> weekday: (string)
//  -> day: (string)
//  -> month: (string)
//  -> year: (string)
//  -> time: (map)
//   -> start: (string)
//   -> end: (string)
//   -> timezone: (string)
// -> description: (string)
// -> calendar: (map) 
//  -> link: (hyperlink: string))
