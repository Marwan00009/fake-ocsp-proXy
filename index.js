
const express = require('express');
const app = express();

app.use((req, res) => {
  res.set('Content-Type', 'application/ocsp-response');
  res.status(200).send(Buffer.from('300d0a000000000000000000', 'hex')); // Dummy OCSP response
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Fake OCSP server running on port ${port}`);
});
