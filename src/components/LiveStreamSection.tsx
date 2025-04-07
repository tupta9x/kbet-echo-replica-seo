
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react'; 
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface Game {
  id: string;
  title: string;
  imageUrl: string;
  preview?: string;
}

export const LiveStreamSection = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games');
        const data = await response.json();
        
        if (data.success && data.games) {
          // Filter for games that have previews
          const gamesWithPreviews = data.games
            .filter((game: any) => game.gamePreviews && game.gamePreviews.en)
            .slice(0, 3)
            .map((game: any) => ({
              id: game.code,
              title: game.name.en,
              imageUrl: game.assets.cover || game.assets.thumb,
              preview: game.gamePreviews.en
            }));
          
          setGames(gamesWithPreviews);
        }
      } catch (error) {
        console.error('Error fetching games with previews:', error);
        // Fallback data if API fails
        setGames([
          { id: '1', title: 'Game Preview 1', imageUrl: 'https://static.gamezop.com/BkzmafyPqJm/cover.jpg', preview: 'https://youtu.be/GOJEoqphJqo' },
          { id: '2', title: 'Game Preview 2', imageUrl: 'https://static.gamezop.com/BkzmafyPqJm/cover.jpg', preview: 'https://youtu.be/GOJEoqphJqo' },
          { id: '3', title: 'Game Preview 3', imageUrl: 'https://static.gamezop.com/BkzmafyPqJm/cover.jpg', preview: 'https://youtu.be/GOJEoqphJqo' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handlePlayClick = (title: string) => {
    toast({
      title: "Video Preview",
      description: `Opening preview for ${title}...`,
    });
  };

  return (
    <section className="py-8 bg-[#0f0f1b]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Game Previews</h2>
          <Link to="/game-previews" className="text-white/80 text-sm hover:text-white flex items-center">
            View All <span className="ml-1">›</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loading ? (
            [...Array(3)].map((_, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden bg-purple-900/30 animate-pulse h-48"></div>
            ))
          ) : (
            games.map((game) => (
              <div key={game.id} className="relative rounded-lg overflow-hidden group">
                <img 
                  src={game.imageUrl} 
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button 
                        onClick={() => handlePlayClick(game.title)}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3"
                      >
                        <Play className="w-6 h-6" />
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-black text-white border-gray-800">
                      <p>Click to watch the preview of {game.title}</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">{game.title}</h3>
                </div>
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                  PREVIEW
                </div>
              </div>
            ))
          )}
        </div>

        {/* Mini Games floating button */}
        <div className="fixed right-4 bottom-20 z-50">
          <Link 
            to="/mini-games" 
            className="block"
          >
            <div className="relative">
              <div className="animate-bounce">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl">
                  🎮
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold text-xs px-4 py-1 rounded-full whitespace-nowrap">
                MINI GAMES
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamSection;
