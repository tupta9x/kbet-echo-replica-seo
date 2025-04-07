
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch games from the Gamezop API
    const response = await fetch('https://pub.gamezop.com/v3/games?id=10431');
    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Failed to fetch games' });
  }
}
