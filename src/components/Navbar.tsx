
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  return (
    <>
      {/* Top header */}
      <header className="bg-[#1b0924] border-b border-purple-800/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-purple-500">K</span>
                <span className="text-white">BET</span>
              </div>
            </Link>

            {/* Promotion Button */}
            <div className="hidden md:flex items-center ml-4">
              <Button variant="ghost" className="text-white flex items-center gap-2 hover:bg-purple-800/20">
                <span className="text-pink-400">🎁</span> Khuyến mãi
              </Button>
            </div>

            {/* Search and Auth */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Button size="icon" variant="ghost" className="rounded-full bg-gray-800/50 text-gray-400">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Tên đăng nhập"
                  className="bg-gray-800/50 border border-gray-700 rounded-md h-9 text-sm w-32 md:w-auto"
                />
              </div>
              
              <div className="flex items-center">
                <Input
                  type="password"
                  placeholder="Mật khẩu"
                  className="bg-gray-800/50 border border-gray-700 rounded-md h-9 text-sm w-32 md:w-auto"
                />
              </div>
              
              <Button 
                className="bg-[#444] hover:bg-gray-600 text-white rounded-md h-9 px-4"
              >
                Đăng nhập
              </Button>

              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-md h-9 px-4"
              >
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main navigation */}
      <nav className="bg-purple-700 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 overflow-x-auto whitespace-nowrap">
            <NavItem icon="⚽" label="THỂ THAO" />
            <NavItem icon="🎭" label="LIVE CASINO" />
            <NavItem icon="🎲" label="QUAY SỐ" />
            <NavItem icon="🎯" label="TABLE GAMES" />
            <NavItem icon="💰" label="NỔ HŨ" />
            <NavItem icon="🃏" label="GAME BÀI" />
            <NavItem icon="🎟️" label="LÔ ĐỀ" />
            <NavItem icon="🐟" label="BẮN CÁ" />
            <NavItem icon="🎰" label="SLOTS" />
            <NavItem icon="⚡" label="GAME NHANH" />
            <NavItem icon="🎮" label="ĐÁ GÀ" />
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ icon, label }: { icon: string; label: string }) => (
  <Link 
    to="/" 
    className="flex items-center gap-2 px-3 py-1 hover:text-yellow-300 transition-colors"
  >
    <span>{icon}</span>
    <span className="font-medium text-sm">{label}</span>
  </Link>
);

export default Navbar;
