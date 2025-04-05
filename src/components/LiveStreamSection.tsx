
import { Link } from 'react-router-dom';

export const LiveStreamSection = () => {
  const liveStreams = [
    { id: 1, viewers: 940, image: '/placeholder.svg' },
    { id: 2, viewers: 817, image: '/placeholder.svg' },
    { id: 3, viewers: 879, image: '/placeholder.svg' }
  ];

  return (
    <section className="py-8 bg-[#0f0f1b]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Live stream</h2>
          <Link to="/live-streams" className="text-white/80 text-sm hover:text-white flex items-center">
            Xem tất cả <span className="ml-1">›</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liveStreams.map((stream) => (
            <div key={stream.id} className="relative rounded-lg overflow-hidden">
              <img 
                src={stream.image} 
                alt={`Live stream ${stream.id}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                LIVE
              </div>
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                👁️ {stream.viewers}
              </div>
            </div>
          ))}
        </div>

        {/* Mini Games floating button */}
        <div className="fixed right-4 bottom-4 z-50">
          <Link 
            to="/mini-games" 
            className="block"
          >
            <div className="relative">
              <div className="animate-bounce">
                <img 
                  src="/placeholder.svg" 
                  alt="Mini Games"
                  className="w-24 h-24" 
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold text-xs px-4 py-1 rounded-full whitespace-nowrap">
                MINI GAMES
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamSection;
