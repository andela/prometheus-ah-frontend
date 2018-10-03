import express from 'express';
import path from 'path';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`'Listening on port '${server.address().port}`);
});
