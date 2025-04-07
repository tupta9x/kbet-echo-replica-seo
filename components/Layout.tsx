
"use client";

import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1b] text-white">
      <Navbar />
      <ScrollArea className="flex-grow">
        <main className="flex-grow">
          {children}
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;
