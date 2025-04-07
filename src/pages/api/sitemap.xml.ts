
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set response header
  res.setHeader('Content-Type', 'text/xml');
  
  // Get all games (limited to a reasonable number)
  const games = await prisma.game.findMany({
    take: 1000,
    select: {
      id: true,
      updatedAt: true,
    },
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://yourdomain.com/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${games.map((game) => `
        <url>
          <loc>https://yourdomain.com/game/${game.id}</loc>
          <lastmod>${new Date(game.updatedAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>`;

  // Send the XML response
  res.status(200).send(xml);
}
