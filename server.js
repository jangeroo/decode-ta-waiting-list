const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer();
app.use(upload.none());

const waitingList = [
  { name: 'Brandon', issue: 'issues with React' },
  { name: 'Sarah', issue: 'CSS questions... ugh.' },
  { name: 'Fatou', issue: 'Who? What? Where? How? :o' },
];

app.get('/waiting-list', (req, res) => {
  console.log('*** GETing from /waiting-list');
  console.log('*** req.body:', JSON.stringify(req.body));
  res.json(waitingList);
});

app.post('/issue', (req, res) => {
  console.log('*** POSTing to /issue');
  console.log('*** req.body:', JSON.stringify(req.body));

  let { name, issue } = req.body;
  waitingList.push({ name, issue });

  let response = { success: true, name, issue };
  res.json(response);
});

const port = 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
