
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { promotions } from "@/data/mockData";

export const Hero = () => {
  return (
    <div className="py-6 md:py-8 bg-kbet-dark">
      <div className="container mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {promotions.map((promo) => (
              <CarouselItem key={promo.id}>
                <div className="relative rounded-lg overflow-hidden">
                  {/* Promotion Image */}
                  <div className="w-full h-[220px] md:h-[300px] lg:h-[400px] bg-gradient-to-r from-kbet-dark to-kbet-secondary flex items-center justify-center">
                    <img 
                      src={promo.imageUrl} 
                      alt={promo.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-8 md:p-12">
                      <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">{promo.title}</h2>
                      <p className="text-gray-200 mb-4 md:mb-6 max-w-lg">{promo.description}</p>
                      <div>
                        <Button className="kbet-button">
                          {promo.ctaText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="text-kbet-gold border-kbet-gold" />
            <CarouselNext className="text-kbet-gold border-kbet-gold" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
