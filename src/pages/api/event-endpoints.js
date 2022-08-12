import {db} from 'database-depoyment';
//const app = express();
//app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Events API listening on port' + port);
});

app.get('/', async (req, res) => {
     res.json({status: 'Ready to go!'});
});

app.get('/:event', async (req, res) => {
    const event = req.params.event;
    const query = db.collection('events').where('name', '==', event);
    const querySnapshot = await query.get();
    if (querySnapshot.size > 0){
        res.json(querySnapshot.docs[0].data());
    }
    else{
      res.json({status: 'Event not found!'});
    }
});

app.post('/',async (req, res)=>{
    const data ={
        name: req.body.name,
        date_time: req.body.date_time,
        location: req.body.location
    };
    await db.collection('events').doc().set(data);
    res.json({status: 'success', data: { events: data}});
  });

  app.delete('/:event', async (req, res) => {
    const event = req.params.event;
    const query = db.collection('events').where('name', '==', event);
    const querySnapshot = await query.get();
    if (querySnapshot.size > 0){
      res = await db.collection('events').where('name', '==', event).delete();
  }
  else{
    res.json({status: 'Event not found!'});
  }
  });

  app.update('/:event', async (req, res) => {
    const event = req.params.event;
    const query = db.collection('events').where('name', '==', event);
    const querySnapshot = await query.get();
    if (querySnapshot.size > 0){
      res = await db.collection('events').where('name', '==', event).update({paramter: newParanter});  //Better way to do this?
    }
    else{
      res.json({status: 'Event not found!'});
    }
  });

