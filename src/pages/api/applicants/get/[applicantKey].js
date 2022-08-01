import {db} from '../../../../database';

export default async function handler(req, res) {
  if(req.method !== 'GET')
  {
    res.status(405).send({message: 'Only GET requests at this endpoint, please'})
    return;
  }
  var query = req.query
  const {applicantKey} = query
  const docref = await db.collection('applicants').doc(applicantKey.toLowerCase()).get();
  res.status(200).json(docref.data())
}