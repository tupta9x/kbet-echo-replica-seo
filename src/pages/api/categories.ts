
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch games from Gamezop API
    const response = await fetch('https://pub.gamezop.com/v3/games?id=10431');
    const data = await response.json();
    
    if (!data.games || !Array.isArray(data.games)) {
      throw new Error('Invalid data format from Gamezop API');
    }
    
    // Extract all unique categories
    const categoriesMap = new Map();
    
    data.games.forEach((game: any) => {
      if (game.categories && game.categories.en) {
        game.categories.en.forEach((category: string) => {
          if (!categoriesMap.has(category)) {
            // Generate a slug from the category name
            const slug = category.toLowerCase().replace(/\s+/g, '-');
            
            categoriesMap.set(category, {
              id: slug,
              name: category,
              slug: slug,
              featured: true // Mark all as featured for now
            });
          }
        });
      }
    });
    
    // Convert Map to array of category objects
    const categories = Array.from(categoriesMap.values());
    
    res.status(200).json({ categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
}
