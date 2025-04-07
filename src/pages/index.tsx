
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SportsCards from '@/components/SportsCards';
import GameCategories from '@/components/GameCategories';
import LiveStreamSection from '@/components/LiveStreamSection';
import LiveDealers from '@/components/LiveDealers';
import Jackpot from '@/components/Jackpot';
import Promotions from '@/components/Promotions';

// Define SEO data for the page
const SEO = {
  title: "KBET - Premium Online Casino & Sports Betting",
  description: "Play your favorite casino games, sports betting, live dealers and more at KBET. Safe, secure, and licensed online gambling platform.",
  keywords: "online casino, sports betting, slots, poker, blackjack, live dealers, gambling, betting",
  openGraph: {
    type: "website",
    url: "https://kbet.com",
    title: "KBET - Premium Online Casino & Sports Betting",
    description: "Play your favorite casino games, sports betting, live dealers and more at KBET.",
    image: "https://lovable.dev/opengraph-image-p98pqg.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kbet",
    title: "KBET - Premium Online Casino & Sports Betting",
    description: "Play your favorite casino games, sports betting, live dealers and more at KBET.",
    image: "https://lovable.dev/opengraph-image-p98pqg.png",
  }
};

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={SEO.openGraph.type} />
        <meta property="og:url" content={SEO.openGraph.url} />
        <meta property="og:title" content={SEO.openGraph.title} />
        <meta property="og:description" content={SEO.openGraph.description} />
        <meta property="og:image" content={SEO.openGraph.image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={SEO.twitter.card} />
        <meta name="twitter:site" content={SEO.twitter.site} />
        <meta name="twitter:title" content={SEO.twitter.title} />
        <meta name="twitter:description" content={SEO.twitter.description} />
        <meta name="twitter:image" content={SEO.twitter.image} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kbet.com/" />
      </Head>

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

// Optional: Use getStaticProps to pre-render at build time
export const getStaticProps: GetStaticProps = async () => {
  // You can fetch data here if needed
  return {
    props: {},
    // Revalidate every 60 seconds
    revalidate: 60,
  };
};
