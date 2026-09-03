const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
  });
});

app.get('/', async (_req, res) => {
  const query = String(_req.query.q || 'nature'); // Default to 'nature' if no query is provided
  const pexelsApiKey = process.env.VITE_PEXELS_API_KEY;

  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      query
    )}&per_page=12`,
    {
      headers: {
        Authorization: pexelsApiKey || '',
      },
    }
  );

  if (!response.ok) {
    return res.status(response.status).json({ error: 'Failed to fetch images from Pexels API' });
  }

  const data = await response.json();
  
  res.status(200).json({
    message: 'Welcome to the backend server!',
    images: data.photos
  });
});

const PROJECTS = [
  { id: 1, title: 'Air Pollution Monitoring', description: 'Legacy code for Arduino-based air quality sensor, Engineers for a Sustainable World', tech: ['Arduino', 'C++'], link: 'https://github.com/cymosilla/Air-Pollution-Monitoring' },
  { id: 2, title: 'FitBot', description: 'Telegram bot for fitness tracking, project for PhysTech Challenge 2025', tech: ['Python', 'Telegram API'], link: 'https://github.com/ultraviolet-21/fit-bot' },
  { id: 3, title: 'Borrowed', description: 'Community-based application for borrowing and lending items, project for IrvineHacks 2026', tech: ['Python', 'SQLAlchemy', 'Flask'], link: 'https://github.com/ultraviolet-21/Borrowed' },
  { id: 4, title: 'Book Finder', description: 'Helps students find the best deals on textbooks and allows currency conversions', tech: ['Python', 'Requests'], link: 'https://github.com/ultraviolet-21/book-finder' }
];

app.get('/api/projects', (req, res) => {
  res.json(PROJECTS);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
