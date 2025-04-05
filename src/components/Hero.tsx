
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Hero = () => {
  return (
    <div className="w-full bg-[#1b0924] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-yellow-400">TABLE GAMES</h1>
            <p className="text-2xl md:text-3xl text-white mt-2">Cược nhanh, thắng lớn</p>
          </div>
          
          <div className="relative mt-8">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="h-[300px] md:h-[400px] w-full rounded-lg bg-purple-900/50 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Table Games" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                <div className="w-3 h-3 rounded-full bg-white/50"></div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      
      {/* Social media buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-40">
        <button className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-lg hover:bg-pink-600 transition-colors">
          <span className="text-xl">💬</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors">
          <span className="text-xl font-bold">f</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white shadow-lg hover:bg-yellow-600 transition-colors">
          <span className="text-xl">✉️</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
