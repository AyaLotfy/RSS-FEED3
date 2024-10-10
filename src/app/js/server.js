const express = require('express');
const Parser = require('rss-parser');
const cors = require('cors');
const app = express();
const parser = new Parser();

app.use(cors());

app.get('/fetch-rss', async (req, res) => {
  const { url } = req.query;
  try {
    const feed = await parser.parseURL(url);
    res.json(feed);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the feed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
