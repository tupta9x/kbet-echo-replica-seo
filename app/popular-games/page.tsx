
import { Metadata } from "next";
import { fetchGamezopGames } from "@/services/gamezopService";
import Layout from "@/components/Layout";
import { GameGrid } from "./components";

export const metadata: Metadata = {
  title: "Popular Games | KBET Casino",
  description: "Play the most popular casino games at KBET. Find trending games with the highest player counts.",
};

export default async function PopularGamesPage() {
  const allGames = await fetchGamezopGames();
  
  // Filter games marked as popular
  const popularGames = allGames.filter(game => game.popular);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Popular Games
        </h1>
        
        <GameGrid games={popularGames} />
      </div>
    </Layout>
  );
}
