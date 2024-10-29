const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/storage', express.static(path.join(__dirname, 'storage')));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
