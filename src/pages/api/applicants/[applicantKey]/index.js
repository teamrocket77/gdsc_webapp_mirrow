import { firestoreApp } from '../../../../database';
import { getFirestore } from 'firebase-admin/firestore';
const Firestore_Database = getFirestore(firestoreApp);

export async function getApplicant(applicantKey) {
    const docref = await Firestore_Database.collection('applicants').doc(applicantKey.toLowerCase()).get();
    if (docref.data() == undefined) {
        return false;
    }
    else {
        return docref.data();
    }
}