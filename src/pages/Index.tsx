
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedGames from '@/components/FeaturedGames';
import CasinoFeatures from '@/components/CasinoFeatures';
import { categories } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col bg-kbet-dark text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <FeaturedGames />
        
        {/* Categories Section */}
        <section className="py-12 bg-kbet-darker border-y border-kbet-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Browse by <span className="text-kbet-gold">Categories</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.filter(cat => cat.featured).map((category) => (
                <div 
                  key={category.id}
                  className="bg-kbet-dark rounded-lg p-6 text-center border border-kbet-secondary/20 hover:border-kbet-gold/50 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2">{category.description}</p>
                  <Button variant="link" className="text-kbet-gold p-0 h-auto">
                    Browse Games <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CasinoFeatures />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-kbet-dark via-kbet-secondary to-kbet-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Playing?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Join KBET today and claim your exclusive welcome bonus. Start playing your favorite casino games in minutes.
            </p>
            <Button className="kbet-button text-lg px-8 py-6">
              Sign Up & Get Bonus
            </Button>
          </div>
        </section>
        
        {/* Responsible Gaming */}
        <section className="py-10 bg-kbet-dark">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h3 className="text-xl font-bold text-white mb-4">Responsible Gaming</h3>
            <p className="text-gray-300 mb-4">
              KBET is committed to promoting responsible gaming. We provide tools and resources to help our players stay in control of their gaming activities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-kbet-secondary text-white hover:bg-kbet-secondary/10">
                Set Deposit Limits
              </Button>
              <Button variant="outline" className="border-kbet-secondary text-white hover:bg-kbet-secondary/10">
                Self-Exclusion Options
              </Button>
              <Button variant="outline" className="border-kbet-secondary text-white hover:bg-kbet-secondary/10">
                Reality Check Reminders
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
