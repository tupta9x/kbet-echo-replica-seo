
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Share2, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Game } from '@/types/types';
import { useToast } from "@/components/ui/use-toast";

// Mock data for game details and related games
const mockGames: Game[] = [
  {
    id: "baccarat-a",
    title: "Baccarat Bàn A",
    description: "Experience the thrill of this classic table game with simple rules and exciting gameplay. Baccarat is one of the most popular casino card games worldwide, known for its simplicity and elegance.",
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
    description: "Premium baccarat experience with professional dealers. Enjoy the luxurious atmosphere of our high-stakes baccarat tables.",
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
    description: "Fast-paced version of the classic baccarat game. Perfect for players who enjoy quick rounds and rapid results.",
    imageUrl: "https://placekitten.com/802/450",
    categoryIds: ["table-games"],
    featured: true,
    new: true,
    popular: true,
    provider: "Evolution Gaming",
    rtp: 98.76
  },
  {
    id: "lightning-baccarat",
    title: "Lightning Baccarat",
    description: "Baccarat with exciting lightning multipliers that can dramatically increase your winnings.",
    imageUrl: "https://placekitten.com/803/450",
    categoryIds: ["table-games"],
    featured: true,
    new: false,
    popular: true,
    provider: "Ezugi",
    rtp: 97.20
  }
];

const GameDetail = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [relatedGames, setRelatedGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set document title and meta description for SEO
    document.title = "KBET - Game Detail";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Play your favorite casino games at KBET. Safe, secure, and licensed online gambling platform.');
    }

    // Simulate loading data
    setIsLoading(true);
    
    setTimeout(() => {
      const foundGame = mockGames.find(g => g.id === gameId) || null;
      setGame(foundGame);
      
      if (foundGame) {
        document.title = `KBET - ${foundGame.title}`;
        if (metaDescription) {
          metaDescription.setAttribute('content', foundGame.description);
        }
        
        // Find related games (same category, excluding current game)
        const related = mockGames
          .filter(g => 
            g.id !== gameId && 
            g.categoryIds.some(cat => foundGame.categoryIds.includes(cat))
          )
          .slice(0, 3);
        
        setRelatedGames(related);
      }
      
      setIsLoading(false);
    }, 800);
  }, [gameId]);

  const handleFavorite = () => {
    toast({
      title: "Added to favorites",
      description: "Game has been added to your favorites list",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Game link has been copied to clipboard",
    });
  };

  if (isLoading) {
    return (
      <div className="bg-[#0f0f1b] min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="bg-[#0f0f1b] min-h-screen p-6">
        <div className="container mx-auto">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-white mb-4">Game Not Found</h1>
            <p className="text-gray-400 mb-8">The game you are looking for does not exist or has been removed.</p>
            <Link to="/">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f1b] min-h-screen pb-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="py-4">
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
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
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-700 hover:bg-gray-800"
                onClick={handleFavorite}
              >
                <Heart className="h-4 w-4 mr-1" />
                Favorite
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-700 hover:bg-gray-800"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
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
          <div className="p-4 border-t border-purple-800/20 flex justify-between items-center flex-wrap gap-4">
            <div>
              {game.rtp && (
                <div className="text-sm">
                  <span className="text-gray-400">RTP:</span> 
                  <span className="ml-1 text-white">{game.rtp}%</span>
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Play for Fun
              </Button>
              <Button 
                size="sm" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Play for Real
              </Button>
            </div>
          </div>
        </div>
        
        {/* Game Info and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Game Information</h2>
              <p className="text-gray-300 leading-relaxed">{game.description}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  Live dealer interaction
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  Multiple camera angles
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  Game history
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  Live chat support
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  Mobile compatible
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  Multi-language support
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/30 h-fit">
            <h3 className="font-semibold text-white mb-4">Game Details</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Provider:</span>
                <span className="text-white">{game.provider}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">RTP:</span>
                <span className="text-white">{game.rtp}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="text-white">Table Game</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Release Date:</span>
                <span className="text-white">2023-05-12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Devices:</span>
                <span className="text-white">Desktop, Mobile, Tablet</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Min Bet:</span>
                <span className="text-white">$1.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Bet:</span>
                <span className="text-white">$5,000.00</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Play Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Games Section */}
        {relatedGames.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Related Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedGames.map((relatedGame) => (
                <Link 
                  key={relatedGame.id} 
                  to={`/game/${relatedGame.id}`}
                  className="block rounded-lg overflow-hidden bg-purple-900/20 border border-purple-800/30 hover:bg-purple-800/30 transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={relatedGame.imageUrl} 
                      alt={relatedGame.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white">{relatedGame.title}</h3>
                      {relatedGame.new && (
                        <Badge className="bg-green-600 text-white">NEW</Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{relatedGame.description}</p>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">{relatedGame.provider}</span>
                      {relatedGame.rtp && <span className="text-gray-400">RTP: {relatedGame.rtp}%</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetail;
