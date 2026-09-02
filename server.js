const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (_req, res) => res.json({ ok: true, service: 'bbb-concepts' }));

app.listen(PORT, () => {
  console.log(`BBB concepts running on port ${PORT}`);
});
