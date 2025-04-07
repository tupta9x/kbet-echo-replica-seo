
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import SportsCards from '@/components/SportsCards';
import GameCategories from '@/components/GameCategories';
import LiveStreamSection from '@/components/LiveStreamSection';
import LiveDealers from '@/components/LiveDealers';
import Jackpot from '@/components/Jackpot';
import Promotions from '@/components/Promotions';

const Index = () => {
  useEffect(() => {
    // SEO - Set document title and meta description
    document.title = "KBET - Premium Online Casino & Sports Betting";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Play your favorite casino games, sports betting, live dealers and more at KBET. Safe, secure, and licensed online gambling platform.');
    }
  }, []);

  return (
    <div className="bg-[#0f0f1b] text-white">
      {/* Hero Section with Table Games Banner */}
      <Hero />
      
      {/* Sports Categories Cards */}
      <SportsCards />
      
      {/* Game Categories */}
      <GameCategories />
      
      {/* Live Stream Section */}
      <LiveStreamSection />
      
      {/* Live Dealers */}
      <LiveDealers />
      
      {/* Jackpot Section */}
      <Jackpot />
      
      {/* Promotions */}
      <Promotions />
    </div>
  );
};

export default Index;
