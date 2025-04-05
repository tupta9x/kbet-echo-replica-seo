
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-600 py-8">
      <div className="container mx-auto relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-6xl font-bold text-yellow-400">TABLE GAMES</h1>
            <p className="text-3xl text-white mt-2">Cược nhanh, thắng lớn</p>
          </div>
          
          <div className="relative mt-8">
            <img 
              src="public/lovable-uploads/28e50e0c-3440-4eab-82e0-2e01d037d730.png" 
              alt="Table Games" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Social media buttons */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-40">
            <button className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white">
              <span className="text-lg">💬</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <span className="text-lg">f</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
              <span className="text-lg">✉️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
