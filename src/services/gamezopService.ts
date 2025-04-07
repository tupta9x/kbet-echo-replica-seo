
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
  gamePreviews?: {
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
  success: boolean;
  games: GamezopGame[];
  [key: string]: any;
}

// Fetch games from Gamezop API
export const fetchGamezopGames = async (): Promise<Game[]> => {
  try {
    const response = await fetch('/api/games');
    const data: GamezopResponse = await response.json();
    
    if (!data.success || !data.games) {
      throw new Error("Failed to fetch games from Gamezop");
    }
    
    // Transform Gamezop data to our Game format
    return data.games.map(gamezopGame => ({
      id: gamezopGame.code,
      title: gamezopGame.name.en,
      description: gamezopGame.description.en,
      imageUrl: gamezopGame.assets.cover || gamezopGame.assets.thumb,
      categoryIds: gamezopGame.categories.en,
      featured: !!gamezopGame.gamePlays && gamezopGame.gamePlays > 10000000,
      new: false, // This would need to be determined by other logic
      popular: !!gamezopGame.rating && gamezopGame.rating > 3.5,
      provider: 'Gamezop',
      rtp: 96 + Math.random() * 3, // Random RTP between 96-99% for demonstration
    }));
  } catch (error) {
    console.error("Error fetching Gamezop games:", error);
    return [];
  }
};

// Fetch a single game by ID
export const fetchGamzeopGameById = async (gameId: string): Promise<Game | null> => {
  try {
    const allGames = await fetchGamezopGames();
    return allGames.find(game => game.id === gameId) || null;
  } catch (error) {
    console.error(`Error fetching Gamezop game with ID ${gameId}:`, error);
    return null;
  }
};
