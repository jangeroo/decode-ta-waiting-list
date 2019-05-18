const express = require('express');
const app = express();

const waitingList = [
  { name: 'Brandon', issues: '' },
  { name: 'Sarah', issues: '' },
  { name: 'Fatou', issues: '' },
];

app.get('/waiting-list', (req, res) => {
  console.log('*** GETing from /waiting-list');
  console.log('*** req.body:', req.body);
  res.json(waitingList);
});

const port = 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
