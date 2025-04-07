
import { Game } from '@/types/types';

export interface GamezopGame {
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

export interface GamezopResponse {
  games: GamezopGame[];
  success: boolean;
}

// Helper function to transform a Gamezop game to our internal Game type
const transformGamezopGame = (game: GamezopGame): Game => {
  // Generate category IDs from the English category names
  const categoryIds = game.categories?.en?.map(category => 
    category.toLowerCase().replace(/\s+/g, '-')
  ) || [];

  return {
    id: game.code,
    title: game.name.en,
    description: game.description.en,
    imageUrl: game.assets.cover || game.assets.square || game.assets.thumb,
    categoryIds,
    featured: Math.random() > 0.5, // Randomly assign featured status
    new: Math.random() > 0.8, // 20% chance to be new
    popular: Math.random() > 0.3, // 70% chance to be popular
    provider: 'Gamezop',
    rtp: 95 + Math.random() * 4 // Random RTP between 95-99%
  };
};

// Fetch all games from Gamezop API
export async function fetchGamezopGames(): Promise<Game[]> {
  try {
    const response = await fetch('https://pub.gamezop.com/v3/games?id=10431', { 
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json() as GamezopResponse;
    
    if (!data.games || !Array.isArray(data.games)) {
      throw new Error('Invalid response format from Gamezop API');
    }
    
    return data.games.map(transformGamezopGame);
  } catch (error) {
    console.error('Error fetching Gamezop games:', error);
    return [];
  }
}

// Fetch a specific game by ID from Gamezop API
export async function fetchGamzeopGameById(gameId: string): Promise<Game | null> {
  try {
    const response = await fetch('https://pub.gamezop.com/v3/games?id=10431', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json() as GamezopResponse;
    
    if (!data.games || !Array.isArray(data.games)) {
      throw new Error('Invalid response format from Gamezop API');
    }
    
    const gameData = data.games.find(g => g.code === gameId);
    
    if (!gameData) {
      return null;
    }
    
    return transformGamezopGame(gameData);
  } catch (error) {
    console.error(`Error fetching Gamezop game with ID ${gameId}:`, error);
    return null;
  }
}
