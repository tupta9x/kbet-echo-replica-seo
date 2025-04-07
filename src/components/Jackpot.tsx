
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface Game {
  id: string;
  title: string;
  imageUrl: string;
  value?: string;
}

export const Jackpot = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchFeaturedGames = async () => {
      try {
        const response = await fetch('/api/games');
        const data = await response.json();
        
        if (data.success && data.games) {
          // Get top 5 games with highest plays
          const topGames = data.games
            .sort((a: any, b: any) => (b.gamePlays || 0) - (a.gamePlays || 0))
            .slice(0, 5)
            .map((game: any) => ({
              id: game.code,
              title: game.name.en,
              imageUrl: game.assets.cover || game.assets.thumb,
              value: formatNumber(game.gamePlays || Math.floor(Math.random() * 5000000) + 1000000)
            }));
          
          setGames(topGames);
        }
      } catch (error) {
        console.error('Error fetching featured games:', error);
        // Fallback data
        const mockGames = [
          { id: 'vong-quay', title: 'ROYAL WHEEL', imageUrl: 'https://static.gamezop.com/BkzmafyPqJm/cover.jpg', value: '1,999,683,982' },
          { id: 'son-tinh', title: 'MOUNTAIN & WATER SPIRIT', imageUrl: 'https://static.gamezop.com/BkzmafyPqJm/cover.jpg', value: '823,367,698' },
          { id: 'tay-du-ky', title: 'JOURNEY TO THE WEST 2', imageUrl: 'https://static.gamezop.com/BkzmafyPqJm/cover.jpg', value: '4,125,254,782' },
          { id: 'pumpking', title: 'PUMPKING', imageUrl: 'https://static.gamezop.com/BkzmafyPqJm/cover.jpg', value: '3,742,423,982' },
          { id: 'world-cup', title: 'ROAD TO WORLD CUP', imageUrl: 'https://static.gamezop.com/BkzmafyPqJm/cover.jpg', value: '1,499,083,982' }
        ];
        setGames(mockGames);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedGames();
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US');
  };
  
  const handlePlayClick = (gameId: string, title: string) => {
    toast({
      title: "Game Starting",
      description: `Loading ${title}...`,
    });
  };

  return (
    <section className="py-8 bg-[#0f0f1b] bg-opacity-90" style={{ 
      backgroundImage: "linear-gradient(to bottom, rgba(15,15,27,0.9), rgba(15,15,27,0.95))"
    }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Popular Games</h2>
          <Link to="/popular-games" className="text-white/80 text-sm hover:text-white flex items-center">
            View All <span className="ml-1">›</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {loading ? (
            [...Array(5)].map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <div className="aspect-video w-full bg-purple-900/30 animate-pulse"></div>
                <div className="mt-2">
                  <div className="h-4 bg-purple-900/30 animate-pulse rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-yellow-700/30 animate-pulse rounded w-1/2"></div>
                </div>
              </div>
            ))
          ) : (
            games.map((game) => (
              <div key={game.id} className="rounded-lg overflow-hidden group">
                <div className="aspect-video w-full relative overflow-hidden">
                  <img 
                    src={game.imageUrl} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      onClick={() => handlePlayClick(game.id, game.title)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <div className="text-sm text-white truncate">{game.title}</div>
                  <div className="text-yellow-300 font-bold">
                    {game.value} plays
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Jackpot;
