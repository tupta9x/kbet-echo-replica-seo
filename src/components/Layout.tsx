
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollArea } from "@/components/ui/scroll-area";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-kbet-dark text-white">
      <Navbar />
      <ScrollArea className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;
