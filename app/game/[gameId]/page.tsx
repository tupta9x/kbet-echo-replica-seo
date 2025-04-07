
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Game } from "@/types/types";
import Layout from "@/components/Layout";
import { fetchGamezopGames, fetchGamzeopGameById } from "@/services/gamezopService";

// Mock data (for fallback when API fails)
const mockGames: Game[] = [
  {
    id: "baccarat-a",
    title: "Baccarat Bàn A",
    description: "Experience the thrill of this classic table game with simple rules and exciting gameplay.",
    imageUrl: "https://placekitten.com/800/450",
    categoryIds: ["table-games"],
    featured: true,
    new: false,
    popular: true,
    provider: "Evolution Gaming",
    rtp: 98.76
  },
  {
    id: "baccarat-b",
    title: "Baccarat Bàn B",
    description: "Premium baccarat experience with professional dealers.",
    imageUrl: "https://placekitten.com/801/450",
    categoryIds: ["table-games"],
    featured: true,
    new: false,
    popular: true,
    provider: "Evolution Gaming",
    rtp: 98.76
  },
  {
    id: "speed-baccarat",
    title: "Speed Baccarat",
    description: "Fast-paced version of the classic baccarat game.",
    imageUrl: "https://placekitten.com/802/450",
    categoryIds: ["table-games"],
    featured: true,
    new: true,
    popular: true,
    provider: "Evolution Gaming",
    rtp: 98.76
  }
];

type Props = {
  params: { gameId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gameId = params.gameId;
  let game;
  
  try {
    game = await fetchGamzeopGameById(gameId);
  } catch (error) {
    game = mockGames.find(g => g.id === gameId) || null;
  }
  
  if (!game) {
    return {
      title: "Game Not Found | KBET Casino",
      description: "The game you are looking for does not exist or has been removed."
    };
  }

  return {
    title: `${game.title} | KBET Casino`,
    description: game.description,
    openGraph: {
      title: `${game.title} | KBET Casino`,
      description: game.description,
      images: [game.imageUrl]
    }
  };
}

export async function generateStaticParams() {
  try {
    const games = await fetchGamezopGames();
    return games.slice(0, 50).map((game) => ({
      gameId: game.id,
    }));
  } catch (error) {
    return [];
  }
}

export default async function GameDetailPage({ params }: Props) {
  const gameId = params.gameId;
  let game: Game | null = null;
  let relatedGames: Game[] = [];
  
  try {
    game = await fetchGamzeopGameById(gameId);
    const allGames = await fetchGamezopGames();
    
    if (game) {
      // Find related games (same category, excluding current game)
      relatedGames = allGames
        .filter(g => 
          g.id !== gameId && 
          g.categoryIds.some(cat => game!.categoryIds.includes(cat))
        )
        .slice(0, 3);
    }
  } catch (error) {
    console.error(`Error fetching game with ID ${gameId}:`, error);
    
    // Fallback to mock data if API fails
    game = mockGames.find(g => g.id === gameId) || null;
    
    if (game) {
      relatedGames = mockGames
        .filter(g => 
          g.id !== gameId && 
          g.categoryIds.some(cat => game!.categoryIds.includes(cat))
        )
        .slice(0, 3);
    }
  }
  
  if (!game) {
    return (
      <Layout>
        <div className="bg-[#0f0f1b] min-h-screen p-6">
          <div className="container mx-auto">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-white mb-4">Game Not Found</h1>
              <p className="text-gray-400 mb-8">The game you are looking for does not exist or has been removed.</p>
              <Link href="/">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-[#0f0f1b] min-h-screen pb-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="py-4">
            <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Games</span>
            </Link>
          </div>
          
          {/* Game Title and Info */}
          <div className="mb-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white">{game.title}</h1>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-gray-400">{game.provider}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <Star className="h-4 w-4 text-gray-500" />
                    <span className="ml-2 text-sm text-gray-400">(4/5)</span>
                  </div>
                </div>
              </div>
              
              <FavoriteShareButtons />
            </div>
          </div>
          
          {/* Game Display */}
          <div className="rounded-lg overflow-hidden border border-purple-800/30 bg-purple-900/10 mb-8">
            {/* Game iframe */}
            <div className="aspect-video w-full">
              <iframe 
                src={`https://demo.casino/game/${game.id}`} 
                title={game.title}
                className="w-full h-full"
                style={{ minHeight: '500px' }}
              />
            </div>
            
            {/* Game Controls */}
            <GameControls game={game} />
          </div>
          
          {/* Game Info and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <GameDescription game={game} />
            <GameDetails game={game} />
          </div>
          
          {/* Related Games Section */}
          <RelatedGames games={relatedGames} />
        </div>
      </div>
    </Layout>
  );
}
