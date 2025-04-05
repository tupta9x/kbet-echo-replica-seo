
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, PlusCircle, Edit, Trash2 } from 'lucide-react';
import { Game } from '@/types/types';
import { games, categories } from '@/data/mockData';

export const GameManagement = () => {
  const [gamesList, setGamesList] = useState<Game[]>(games);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  
  const { toast } = useToast();

  const handleSearch = () => {
    const filtered = gamesList.filter(game => 
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  const handleAddGame = () => {
    setDialogMode('add');
    setSelectedGame({
      id: '',
      title: '',
      description: '',
      imageUrl: '',
      categoryIds: [],
      featured: false,
      new: true,
      popular: false,
      provider: '',
    });
    setIsDialogOpen(true);
  };

  const handleEditGame = (game: Game) => {
    setDialogMode('edit');
    setSelectedGame({ ...game });
    setIsDialogOpen(true);
  };

  const handleDeleteGame = (gameId: string) => {
    const updatedGames = gamesList.filter(game => game.id !== gameId);
    setGamesList(updatedGames);
    setFilteredGames(updatedGames);
    
    toast({
      title: "Game deleted",
      description: "The game has been successfully deleted",
    });
  };

  const handleSaveGame = () => {
    if (!selectedGame) return;
    
    if (dialogMode === 'add') {
      // In a real app, we'd generate a unique ID
      const newGame = { 
        ...selectedGame, 
        id: `game${gamesList.length + 1}` 
      };
      
      const updatedGames = [...gamesList, newGame];
      setGamesList(updatedGames);
      setFilteredGames(updatedGames);
      
      toast({
        title: "Game added",
        description: "The new game has been successfully added",
      });
    } else {
      const updatedGames = gamesList.map(game => 
        game.id === selectedGame.id ? selectedGame : game
      );
      
      setGamesList(updatedGames);
      setFilteredGames(updatedGames);
      
      toast({
        title: "Game updated",
        description: "The game has been successfully updated",
      });
    }
    
    setIsDialogOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Games Management</h1>
        <Button onClick={handleAddGame} className="kbet-button">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Game
        </Button>
      </div>

      <Card className="bg-kbet-darker border-kbet-secondary/20 mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Input
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="kbet-input pr-10"
              />
              <Search 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" 
                onClick={handleSearch}
              />
            </div>
            <Button onClick={handleSearch} className="kbet-button sm:w-auto w-full">
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="bg-kbet-darker rounded-lg border border-kbet-secondary/20 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-kbet-secondary/10">
              <TableHead className="text-kbet-gold">Game Title</TableHead>
              <TableHead className="text-kbet-gold">Provider</TableHead>
              <TableHead className="text-kbet-gold hidden md:table-cell">Categories</TableHead>
              <TableHead className="text-kbet-gold hidden lg:table-cell">Status</TableHead>
              <TableHead className="text-kbet-gold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <TableRow key={game.id} className="hover:bg-kbet-secondary/10">
                  <TableCell className="font-medium">{game.title}</TableCell>
                  <TableCell>{game.provider}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {game.categoryIds.map((catId) => {
                        const category = categories.find(c => c.id === catId);
                        return category ? (
                          <Badge key={catId} variant="outline" className="border-kbet-gold text-kbet-gold">
                            {category.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex gap-1">
                      {game.featured && <Badge className="bg-blue-500">Featured</Badge>}
                      {game.new && <Badge className="bg-kbet-accent">New</Badge>}
                      {game.popular && <Badge className="bg-kbet-gold text-kbet-dark">Popular</Badge>}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEditGame(game)}
                        className="border-kbet-gold text-kbet-gold hover:bg-kbet-gold/10"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteGame(game.id)}
                        className="border-red-500 text-red-500 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No games found. Try a different search term.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Add/Edit Game Dialog */}
      {selectedGame && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-kbet-darker border-kbet-secondary/20 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl text-white">
                {dialogMode === 'add' ? 'Add New Game' : 'Edit Game'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Game Title</label>
                  <Input
                    placeholder="Enter game title"
                    value={selectedGame.title}
                    onChange={(e) => setSelectedGame({...selectedGame, title: e.target.value})}
                    className="kbet-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Provider</label>
                  <Input
                    placeholder="Game provider"
                    value={selectedGame.provider}
                    onChange={(e) => setSelectedGame({...selectedGame, provider: e.target.value})}
                    className="kbet-input"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Description</label>
                <Input
                  placeholder="Game description"
                  value={selectedGame.description}
                  onChange={(e) => setSelectedGame({...selectedGame, description: e.target.value})}
                  className="kbet-input"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Image URL</label>
                <Input
                  placeholder="URL to game image"
                  value={selectedGame.imageUrl}
                  onChange={(e) => setSelectedGame({...selectedGame, imageUrl: e.target.value})}
                  className="kbet-input"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Categories</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={category.id} 
                        checked={selectedGame.categoryIds.includes(category.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedGame({
                              ...selectedGame, 
                              categoryIds: [...selectedGame.categoryIds, category.id]
                            });
                          } else {
                            setSelectedGame({
                              ...selectedGame, 
                              categoryIds: selectedGame.categoryIds.filter(id => id !== category.id)
                            });
                          }
                        }}
                        className="border-kbet-gold text-kbet-gold"
                      />
                      <label 
                        htmlFor={category.id} 
                        className="text-sm font-medium text-gray-300 cursor-pointer"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator className="bg-kbet-secondary/20" />
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Game Status</label>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="featured" 
                      checked={selectedGame.featured}
                      onCheckedChange={(checked) => 
                        setSelectedGame({...selectedGame, featured: !!checked})
                      }
                      className="border-kbet-gold text-kbet-gold"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-300 cursor-pointer">
                      Featured
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="new" 
                      checked={selectedGame.new}
                      onCheckedChange={(checked) => 
                        setSelectedGame({...selectedGame, new: !!checked})
                      }
                      className="border-kbet-gold text-kbet-gold"
                    />
                    <label htmlFor="new" className="text-sm font-medium text-gray-300 cursor-pointer">
                      New
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="popular" 
                      checked={selectedGame.popular}
                      onCheckedChange={(checked) => 
                        setSelectedGame({...selectedGame, popular: !!checked})
                      }
                      className="border-kbet-gold text-kbet-gold"
                    />
                    <label htmlFor="popular" className="text-sm font-medium text-gray-300 cursor-pointer">
                      Popular
                    </label>
                  </div>
                </div>
              </div>
              
              {selectedGame.rtp !== undefined && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">RTP Percentage</label>
                  <Input
                    type="number"
                    placeholder="Game RTP percentage"
                    value={selectedGame.rtp}
                    onChange={(e) => setSelectedGame({...selectedGame, rtp: parseFloat(e.target.value)})}
                    className="kbet-input"
                  />
                </div>
              )}
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="border-kbet-secondary text-white">
                Cancel
              </Button>
              <Button onClick={handleSaveGame} className="kbet-button">
                Save Game
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default GameManagement;
