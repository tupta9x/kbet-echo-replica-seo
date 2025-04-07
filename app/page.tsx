
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SportsCards from "@/components/SportsCards";
import GameCategories from "@/components/GameCategories";
import LiveStreamSection from "@/components/LiveStreamSection";
import LiveDealers from "@/components/LiveDealers";
import Jackpot from "@/components/Jackpot";
import Promotions from "@/components/Promotions";

export const metadata = {
  title: "KBET - Premium Online Casino & Sports Betting",
  description: "Play your favorite casino games, sports betting, live dealers and more at KBET. Safe, secure, and licensed online gambling platform."
};

export default function HomePage() {
  return (
    <Layout>
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
    </Layout>
  );
}
