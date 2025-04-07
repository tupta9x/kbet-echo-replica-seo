
import { Game } from '@/types/types';

export interface GamezopGame {
  id: string;
  name: {
    en: string;
    [key: string]: string;
  };
  description: {
    en: string;
    [key: string]: string;
  };
  categories: string[];
  assets: {
    cover: string;
    thumbnail: string;
    [key: string]: string;
  };
  url: string;
  vendor: string;
  popularity: number;
  isNew: boolean;
  [key: string]: any;
}

export interface GamezopResponse {
  success: boolean;
  games: GamezopGame[];
  [key: string]: any;
}

// Fetch games from Gamezop API
export const fetchGamezopGames = async (): Promise<Game[]> => {
  try {
    const response = await fetch('https://pub.gamezop.com/v3/games?id=10431');
    const data: GamezopResponse = await response.json();
    
    if (!data.success || !data.games) {
      throw new Error("Failed to fetch games from Gamezop");
    }
    
    // Transform Gamezop data to our Game format
    return data.games.map(gamezopGame => ({
      id: gamezopGame.id,
      title: gamezopGame.name.en,
      description: gamezopGame.description.en,
      imageUrl: gamezopGame.assets.cover || gamezopGame.assets.thumbnail,
      categoryIds: gamezopGame.categories,
      featured: gamezopGame.popularity > 0.7,
      new: gamezopGame.isNew,
      popular: gamezopGame.popularity > 0.8,
      provider: gamezopGame.vendor || 'Gamezop',
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
