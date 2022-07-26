export default function handler(req, res) {
  if(req.method !== 'GET')
  {
    res.status(405).send({message: 'Only GET requests at this endpoint, please'})
    return;
  }
  var query = req.query
  const {applicantKey} = query
  res.status(200).json({text: applicantKey}) //just for testing
}