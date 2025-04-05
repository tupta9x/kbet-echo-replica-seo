
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Game } from '@/types/types';
import { useToast } from "@/components/ui/use-toast";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  const { toast } = useToast();

  const handlePlayNow = () => {
    toast({
      title: "Game Starting",
      description: `Loading ${game.title}...`,
    });
  };

  return (
    <Card className="kbet-card transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-0 relative">
        <img 
          src={game.imageUrl} 
          alt={game.title} 
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {game.new && (
            <Badge variant="secondary" className="bg-kbet-accent text-white">
              NEW
            </Badge>
          )}
          {game.popular && (
            <Badge variant="secondary" className="bg-kbet-gold text-kbet-dark">
              HOT
            </Badge>
          )}
        </div>
      </CardContent>
      
      <div className="p-4">
        <h3 className="font-bold text-white text-lg mb-1 truncate">{game.title}</h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{game.description}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
          <span>{game.provider}</span>
          {game.rtp && <span>RTP: {game.rtp}%</span>}
        </div>
        
        <Button 
          className="kbet-button w-full" 
          onClick={handlePlayNow}
        >
          Play Now
        </Button>
      </div>
    </Card>
  );
};

export default GameCard;
