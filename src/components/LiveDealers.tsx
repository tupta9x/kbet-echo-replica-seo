
import { Link } from 'react-router-dom';

export const LiveDealers = () => {
  const dealers = [
    { id: 1, provider: 'GDY' },
    { id: 2, provider: 'DG' },
    { id: 3, provider: 'AW VIP' },
    { id: 4, provider: 'Ezugi' },
    { id: 5, provider: 'Evolution Gaming' }
  ];

  return (
    <section className="py-8 bg-[#0f0f1b]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {dealers.map((dealer) => (
            <Link 
              key={dealer.id}
              to={`/live-dealer/${dealer.id}`}
              className="block rounded-lg overflow-hidden relative group"
            >
              <div className="aspect-[3/4] bg-purple-900/60">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-5xl text-purple-600/70">🎭</div>
                </div>
              </div>
              
              <div className="absolute top-4 left-4">
                <div className="text-sm font-bold text-white">
                  {dealer.provider}
                </div>
              </div>
              
              {dealer.id === 4 && (
                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                    Play Now
                  </button>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDealers;
