
import { Link } from 'react-router-dom';

export const LiveStreamSection = () => {
  const liveStreams = [
    { id: 1, viewers: 940 },
    { id: 2, viewers: 817 },
    { id: 3, viewers: 879 }
  ];

  return (
    <section className="py-8 bg-[#0f0f1b]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Live Stream</h2>
          <Link to="/live-streams" className="text-white/80 text-sm hover:text-white flex items-center">
            View All <span className="ml-1">›</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {liveStreams.map((stream) => (
            <div key={stream.id} className="relative rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-purple-900/30">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-5xl text-purple-900/50">🎬</div>
                </div>
              </div>
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
        <div className="fixed right-4 bottom-20 z-50">
          <Link 
            to="/mini-games" 
            className="block"
          >
            <div className="relative">
              <div className="animate-bounce">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl">
                  🎮
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold text-xs px-4 py-1 rounded-full whitespace-nowrap">
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
