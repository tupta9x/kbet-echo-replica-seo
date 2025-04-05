
import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, X, LayoutGrid, Home, LogOut, Users, Tag, Settings, Search, Database, Code } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Clear admin role
    localStorage.removeItem('userRole');
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/');
  };

  const menuItems = [
    { 
      label: 'Dashboard',
      path: '/admin',
      icon: <Home size={20} />
    },
    { 
      label: 'Games Management',
      path: '/admin/games',
      icon: <LayoutGrid size={20} />
    },
    { 
      label: 'Categories',
      path: '/admin/categories',
      icon: <Tag size={20} />
    },
    { 
      label: 'SEO Management',
      path: '/admin/seo',
      icon: <Search size={20} />
    },
    { 
      label: 'Game Import Tools',
      path: '/admin/tools',
      icon: <Database size={20} />
    },
    { 
      label: 'Settings',
      path: '/admin/settings',
      icon: <Settings size={20} />
    },
    { 
      label: 'Users',
      path: '/admin/users',
      icon: <Users size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-kbet-dark flex">
      {/* Sidebar */}
      <aside 
        className={`bg-kbet-darker border-r border-kbet-secondary/20 transition-all duration-300 
          ${isSidebarOpen ? 'w-64' : 'w-0 md:w-16'} flex-shrink-0`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 flex items-center justify-between">
            {isSidebarOpen && (
              <Link to="/admin" className="text-xl font-bold text-kbet-gold">
                KBET<span className="text-white">Admin</span>
              </Link>
            )}
            <button 
              onClick={toggleSidebar} 
              className="text-white hover:text-kbet-gold p-1"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          <Separator className="bg-kbet-secondary/20" />
          
          {/* Navigation Menu */}
          <ScrollArea className="flex-grow py-4">
            <nav className="space-y-1 px-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center py-2 px-3 rounded-md transition-colors text-sm ${
                    location.pathname === item.path 
                      ? 'bg-kbet-gold/10 text-kbet-gold' 
                      : 'text-gray-300 hover:bg-kbet-secondary/10 hover:text-white'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {isSidebarOpen && <span>{item.label}</span>}
                </Link>
              ))}
            </nav>
          </ScrollArea>
          
          <Separator className="bg-kbet-secondary/20" />
          
          {/* Logout */}
          <div className="p-4">
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="w-full justify-start text-gray-300 hover:bg-kbet-secondary/10 hover:text-white"
            >
              <LogOut size={18} className="mr-2" />
              {isSidebarOpen && <span>Logout</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
