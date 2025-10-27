const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, 'data', 'responses.json');
// ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

app.get('/health', (req, res) => res.json({ok: true}));

// collect endpoint
app.post('/api/collect', (req, res) => {
  try {
    const payload = {
      id: Date.now(),
      ts: new Date().toISOString(),
      body: req.body
    };
    const raw = fs.readFileSync(DATA_FILE);
    const arr = JSON.parse(raw || '[]');
    arr.push(payload);
    fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2));
    return res.json({ok: true, saved: payload});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ok:false, error: String(err)});
  }
});

app.listen(PORT, () => console.log('FunilMaker backend listening on', PORT));
