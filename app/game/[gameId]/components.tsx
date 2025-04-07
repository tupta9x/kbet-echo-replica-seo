
"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Game } from "@/types/types";

export function FavoriteShareButtons() {
  const { toast } = useToast();

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

  return (
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
  );
}

export function GameControls({ game }: { game: Game }) {
  return (
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
  );
}

export function GameDescription({ game }: { game: Game }) {
  return (
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
  );
}

export function GameDetails({ game }: { game: Game }) {
  return (
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
  );
}

export function RelatedGames({ games }: { games: Game[] }) {
  if (games.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Related Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <Link 
            key={game.id} 
            href={`/game/${game.id}`}
            className="block rounded-lg overflow-hidden bg-purple-900/20 border border-purple-800/30 hover:bg-purple-800/30 transition-all"
          >
            <div className="aspect-[16/9] overflow-hidden relative">
              <Image 
                src={game.imageUrl} 
                alt={game.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-white">{game.title}</h3>
                {game.new && (
                  <Badge className="bg-green-600 text-white">NEW</Badge>
                )}
              </div>
              
              <p className="text-sm text-gray-400 mb-3 line-clamp-2">{game.description}</p>
              
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">{game.provider}</span>
                {game.rtp && <span className="text-gray-400">RTP: {game.rtp}%</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
