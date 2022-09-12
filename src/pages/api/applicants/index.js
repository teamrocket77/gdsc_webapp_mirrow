import {db} from '../../../database';

export default async function handler(req, res) {
    if(req.method !== 'GET')
    {
      res.status(405).send({message: 'Only GET requests at this endpoint, please'})
      return;
    }
    const snapshot = await db.collection('applicants').get();
    res.status(200).json(JSON.stringify(snapshot.docs.map(doc => doc.data())));
}