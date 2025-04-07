
import { NextApiRequest, NextApiResponse } from 'next';

interface GamezopGame {
  code: string;
  url: string;
  name: {
    en: string;
    [key: string]: string;
  };
  isPortrait: boolean;
  description: {
    en: string;
    [key: string]: string;
  };
  assets: {
    cover: string;
    brick: string;
    thumb: string;
    wall: string;
    square: string;
    screens: string[];
    coverTiny: string;
    brickTiny: string;
    [key: string]: any;
  };
  categories: {
    en: string[];
    [key: string]: string[];
  };
  tags: {
    en: string[];
    [key: string]: string[];
  };
  width: number;
  height: number;
  colorMuted: string;
  colorVibrant: string;
  privateAllowed: boolean;
  rating?: number;
  numberOfRatings?: number;
  gamePlays?: number;
  hasIntegratedAds?: boolean;
}

interface GamezopResponse {
  games: GamezopGame[];
  success: boolean;
}

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
