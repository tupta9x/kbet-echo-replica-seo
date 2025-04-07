
"use client";

import Link from "next/link";
import Image from "next/image";
import { Game } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

export function GameGrid({ games }: { games: Game[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export function GameCard({ game }: { game: Game }) {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="rounded-lg overflow-hidden bg-purple-900/20 border border-purple-800/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={game.imageUrl} 
          alt={game.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {isHovering && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Link href={`/game/${game.id}`}>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <PlayCircle className="mr-2 h-5 w-5" />
                Play Now
              </Button>
            </Link>
          </div>
        )}
        
        {game.new && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-green-600 text-white">NEW</Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-white text-lg mb-1">{game.title}</h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{game.description}</p>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-400">{game.provider}</span>
          {game.rtp && <span className="text-gray-400">RTP: {game.rtp}%</span>}
        </div>
      </div>
    </div>
  );
}
