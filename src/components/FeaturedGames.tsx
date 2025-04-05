
import { useState } from 'react';
import { getFilteredGames } from '@/data/mockData';
import GameCard from '@/components/GameCard';
import CategoryTabs from '@/components/CategoryTabs';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

export const FeaturedGames = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };
  
  const filteredGames = getFilteredGames(
    activeCategory !== 'all' ? activeCategory : undefined,
    searchTerm
  );
  
  return (
    <section className="py-8 md:py-12 bg-kbet-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">
            <span className="text-kbet-gold">Featured</span> Games
          </h2>
          
          <div className="relative w-full md:w-auto">
            <Input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="kbet-input w-full md:w-64 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedGames;
