import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//home page, also contains image generation functionality (incorporate Pexels API for image generation)

app.get('/', async (_req: Request, res: Response) => {
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


app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const PROJECTS = [
  { id: 1, title: 'Air Pollution Monitoring', description: 'Legacy Code for Arduino-based air quality sensor', tech: ['Arduino', 'C++'], link: 'https://github.com/cymosilla/Air-Pollution-Monitoring'},
  { id: 2, title: 'FitBot', description: 'Telegram bot for fitness tracking', tech: ['Python', 'Telegram API'], link: 'https://github.com/ultraviolet-21/fit-bot'},
  { id: 3, title: 'Borrowed', description: 'Community-based application for borrowing and lending items', tech: ['Python', 'SQLAlchemy', 'Flask'], link: 'https://github.com/ultraviolet-21/Borrowed' }
]; 

app.get('/api/projects', (req, res) => {
  res.json(PROJECTS);
});

