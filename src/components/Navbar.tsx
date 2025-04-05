
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, User, LogIn } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for: ${searchTerm}`,
    });
    // Ideally, we would redirect to search results page
  };

  const handleLogin = () => {
    toast({
      title: "Login required",
      description: "Please login to continue",
    });
  };

  const navLinks = [
    { label: 'Casino', path: '/' },
    { label: 'Live Casino', path: '/live-casino' },
    { label: 'Sports', path: '/sports' },
    { label: 'Promotions', path: '/promotions' },
  ];

  return (
    <header className="bg-kbet-darker border-b border-kbet-secondary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-kbet-gold">K<span className="text-white">BET</span></div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                className="nav-link text-white font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-kbet-dark border border-kbet-secondary/30 rounded-full pl-10 pr-4 py-2 text-sm text-white w-48 focus:w-64 transition-all duration-300 focus-visible:ring-kbet-gold"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
            <Button 
              variant="outline" 
              onClick={handleLogin}
              className="border-kbet-gold text-kbet-gold hover:bg-kbet-gold/10"
            >
              <LogIn className="h-4 w-4 mr-2" /> Login
            </Button>
            <Button 
              onClick={() => toast({ 
                title: "Registration",
                description: "Registration form will open here"
              })}
              className="kbet-button"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <nav className="flex flex-col space-y-4 mb-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.path} 
                  className="nav-link text-white font-medium py-2 px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="kbet-input w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
            
            <div className="flex flex-col space-y-3">
              <Button 
                variant="outline" 
                onClick={handleLogin}
                className="border-kbet-gold text-kbet-gold hover:bg-kbet-gold/10 w-full"
              >
                <LogIn className="h-4 w-4 mr-2" /> Login
              </Button>
              <Button 
                onClick={() => toast({ 
                  title: "Registration",
                  description: "Registration form will open here"
                })}
                className="kbet-button w-full"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
