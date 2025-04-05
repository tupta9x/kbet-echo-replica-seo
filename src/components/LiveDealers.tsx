
import { Link } from 'react-router-dom';

export const LiveDealers = () => {
  const dealers = [
    { id: 1, provider: 'GDY', image: 'public/lovable-uploads/09923ea0-a261-4954-a3fd-565538f3945c.png' },
    { id: 2, provider: 'DG', image: 'public/lovable-uploads/09923ea0-a261-4954-a3fd-565538f3945c.png' },
    { id: 3, provider: 'AW VIP', image: 'public/lovable-uploads/09923ea0-a261-4954-a3fd-565538f3945c.png' },
    { id: 4, provider: 'Ezugi', image: 'public/lovable-uploads/09923ea0-a261-4954-a3fd-565538f3945c.png' },
    { id: 5, provider: 'Evolution Gaming', image: 'public/lovable-uploads/09923ea0-a261-4954-a3fd-565538f3945c.png' }
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
                <img 
                  src={dealer.image}
                  alt={`Dealer ${dealer.id}`}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              
              <div className="absolute top-4 left-4">
                <div className="text-sm font-bold text-white">
                  {dealer.provider}
                </div>
              </div>
              
              {dealer.id === 4 && (
                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                    Chơi Game
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
