
import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Game } from '@/types/types';
import { Link } from 'react-router-dom';

// Mock data for search results
const mockGames: Game[] = [
  {
    id: "baccarat-a",
    title: "Baccarat Bàn A",
    description: "Classic table game with simple rules and exciting gameplay",
    imageUrl: "https://placekitten.com/400/220",
    categoryIds: ["table-games"],
    featured: true,
    new: false,
    popular: true,
    provider: "Evolution Gaming"
  },
  {
    id: "baccarat-b",
    title: "Baccarat Bàn B",
    description: "Premium baccarat experience with professional dealers",
    imageUrl: "https://placekitten.com/401/220",
    categoryIds: ["table-games"],
    featured: true,
    new: false,
    popular: true,
    provider: "Evolution Gaming"
  },
  {
    id: "speed-baccarat",
    title: "Speed Baccarat",
    description: "Fast-paced version of the classic baccarat game",
    imageUrl: "https://placekitten.com/402/220",
    categoryIds: ["table-games"],
    featured: true,
    new: true,
    popular: true,
    provider: "Evolution Gaming"
  },
  {
    id: "lightning-baccarat",
    title: "Lightning Baccarat",
    description: "Baccarat with exciting lightning multipliers",
    imageUrl: "https://placekitten.com/403/220",
    categoryIds: ["table-games"],
    featured: true,
    new: false,
    popular: true,
    provider: "Ezugi"
  }
];

interface SearchPopupProps {
  open: boolean;
  onClose: () => void;
}

const SearchPopup = ({ open, onClose }: SearchPopupProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Game[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Filter games based on search query
    const filtered = mockGames.filter(game => 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filtered);
  }, [searchQuery]);

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] p-0 bg-[#1c1c2d] border-purple-800/30 text-white">
        <div className="p-4 border-b border-purple-800/20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Search</h2>
            <button 
              onClick={onClose} 
              className="p-1 hover:bg-purple-800/20 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="p-0">
          <Command className="rounded-lg border-0 bg-transparent">
            <div className="flex items-center px-3 border-b border-purple-800/20">
              <Search className="mr-2 h-4 w-4 shrink-0 text-purple-400" />
              <CommandInput 
                placeholder="Search games..."
                value={searchQuery}
                onValueChange={setSearchQuery}
                className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-purple-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
            
            <CommandList>
              <CommandEmpty className="py-6 text-center text-sm">
                No results found.
              </CommandEmpty>
              
              {searchResults.length > 0 && (
                <CommandGroup heading={`${searchResults.length} results`} className="px-2 py-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-2">
                    {searchResults.map((game) => (
                      <Link 
                        key={game.id} 
                        to={`/game/${game.id}`}
                        onClick={onClose}
                        className="block"
                      >
                        <div className="rounded overflow-hidden bg-purple-900/20 hover:bg-purple-800/40 transition-all">
                          <div className="h-[120px] overflow-hidden">
                            <img 
                              src={game.imageUrl} 
                              alt={game.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-2">
                            <h3 className="font-medium text-sm">{game.title}</h3>
                            <p className="text-xs text-gray-400">{game.provider}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchPopup;
