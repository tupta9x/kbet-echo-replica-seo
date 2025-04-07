
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchGamezopGames } from '@/services/gamezopService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Content-Type', 'text/xml');
  
  try {
    // Fetch all games from the API
    const games = await fetchGamezopGames();
    
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kbet.com';
    
    // Build sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${games.map(game => `
      <url>
        <loc>${baseUrl}/game/${game.id}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      `).join('')}
    </urlset>`;
    
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
}
