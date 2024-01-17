const express = require('express');
const app = express();

const port = process.argv.length > 2
  ? +process.argv[2]
  : 3000;

app.get('*', (req, res) => {
  const info = {
    connection: {
      localAddress: req.client.localAddress,
      localFamily: req.client.localFamily,
      localPort: req.client.localPort,
      remoteAddress: req.client.remoteAddress,
      remoteFamily: req.client.remoteFamily,
      remotePort: req.client.remotePort
    },
    http: {
      method: req.method,
      path: req.path,
      httpVersion: req.httpVersion,
      headers: req.headers
    }
  };

  res.send(info);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
