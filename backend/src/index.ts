import express, { Request, Response } from 'express';
import cors from 'cors';
import { Mistral } from '@mistralai/mistralai';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//home page, will display image and caption
app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to the backend server!' });
});

app.post('/', async (req: Request, res: Response) => {
  const { imageUrl } = req.body as { imageUrl?: unknown };
  if (typeof imageUrl !== 'string' || imageUrl.length === 0) {
    return res.status(400).json({ error: 'imageUrl is required' });
  }

  const mistralApiKey = process.env.MISTRAL_API_KEY || process.env.VITE_MISTRAL_API_KEY;
  if (!mistralApiKey) {
    return res.status(500).json({ error: 'MISTRAL_API_KEY is not configured' });
  }

  //generate caption using Mistral API
  try {
    const mistral = new Mistral({ apiKey: mistralApiKey });
    const response = await mistral.chat.complete({
      model: 'pixtral-12b-2409',
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: 'Describe this image in one concise sentence.' },
          { type: 'image_url', imageUrl }
        ]
      }]
    });

    const content = response.choices[0]?.message?.content;
    const caption = typeof content === 'string'
      ? content
      : Array.isArray(content)
        ? content
          .filter((part): part is { type: 'text'; text: string } => part.type === 'text' && typeof part.text === 'string')
          .map((part) => part.text)
          .join(' ')
        : '';
    return res.status(200).json({ caption: caption || 'No caption available.' });
  } catch (error) {
    console.error('Mistral caption request failed:', error);
    return res.status(502).json({ error: 'Failed to generate image caption' });
  }
});

//health check
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
  { id: 1, title: 'Air Pollution Monitoring', description: 'Legacy code for Arduino-based air quality sensor, Engineers for a Sustainable World', tech: ['Arduino', 'C++'], link: 'https://github.com/cymosilla/Air-Pollution-Monitoring' },
  { id: 2, title: 'FitBot', description: 'Telegram bot for fitness tracking, project for PhysTech Challenge 2025', tech: ['Python', 'Telegram API'], link: 'https://github.com/ultraviolet-21/fit-bot' },
  { id: 3, title: 'Borrowed', description: 'Community-based application for borrowing and lending items, project for IrvineHacks 2026', tech: ['Python', 'SQLAlchemy', 'Flask'], link: 'https://github.com/ultraviolet-21/Borrowed' },
  { id: 4, title: 'Book Finder', description: 'Helps students find the best deals on textbooks and allows currency conversions', tech: ['Python', 'Requests'], link: 'https://github.com/ultraviolet-21/book-finder' }
];

app.get('/api/projects', (req, res) => {
  res.json(PROJECTS);
});

