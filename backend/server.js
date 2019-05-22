const express = require('express');
const app = express();

const multer = require('multer');
const upload = multer();
app.use(upload.none());

const Mongo = require('mongodb');
const MongoClient = Mongo.MongoClient;
const url =
  'mongodb+srv://michael:aoeuaoeu@decodemtl-kqlqz.mongodb.net/test?retryWrites=true';

app.get('/waiting-list', (req, res) => {
  console.log('*** GET /waiting-list');
  console.log('    req.body:', req.body);
  MongoClient.connect(url)
    .then(db => {
      dbo = db.db('ta-waiting-list');
      dbo
        .collection('waiting-list')
        .find({})
        .toArray()
        .then(waitingList => {
          console.log('mongo waitingList:', waitingList);
          db.close();
          res.json(waitingList);
        });
    })
    .catch(error => res.json({ success: false, error }));
});

app.post('/issue', (req, res) => {
  console.log('*** POST /issue');
  console.log('    req.body:', req.body);

  MongoClient.connect(url)
    .then(db => {
      dbo = db.db('ta-waiting-list');
      dbo
        .collection('waiting-list')
        .insertOne(req.body)
        .then(result => {
          console.log('Document inserted:', result.insertedId);
          res.send;
        });
    })
    .catch(error => res.json({ success: false, error }));

  let response = { success: true, name, issue };
  res.json(response);
});

const port = 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
