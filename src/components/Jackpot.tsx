
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Jackpot = () => {
  const [jackpotAmount, setJackpotAmount] = useState('830,825,199,741');
  
  useEffect(() => {
    // Simulate increasing jackpot
    const interval = setInterval(() => {
      // Generate a random increase between 100,000 and 1,000,000
      const increase = Math.floor(Math.random() * 900000) + 100000;
      
      // Get the current amount as a number, add the increase, and format back
      const currentNumber = Number(jackpotAmount.replace(/,/g, ''));
      const newNumber = currentNumber + increase;
      const formatted = newNumber.toLocaleString('en-US');
      
      setJackpotAmount(formatted);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [jackpotAmount]);

  const jackpotGames = [
    { 
      id: 'vong-quay', 
      title: 'VÒNG QUAY HOÀNG GIA', 
      image: '/placeholder.svg',
      value: '1,999,683,982' 
    },
    { 
      id: 'son-tinh', 
      title: 'SƠN TINH THỦY TINH', 
      image: '/placeholder.svg',
      value: '823,367,698' 
    },
    { 
      id: 'tay-du-ky', 
      title: 'TÂY DU KÝ 2', 
      image: '/placeholder.svg',
      value: '4,125,254,782' 
    },
    { 
      id: 'pumpking', 
      title: 'PUMPKING', 
      image: '/placeholder.svg',
      value: '3,742,423,982' 
    },
    { 
      id: 'world-cup', 
      title: 'ĐƯỜNG ĐẾN WORLD CUP', 
      image: '/placeholder.svg',
      value: '1,499,083,982' 
    }
  ];

  return (
    <section className="py-8 bg-[#0f0f1b]" style={{ 
      backgroundImage: "url('/placeholder.svg')",
      backgroundSize: "cover",
      backgroundPosition: "bottom"
    }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Hũ sắp nổ</h2>
          <Link to="/jackpots" className="text-white/80 text-sm hover:text-white flex items-center">
            Xem tất cả <span className="ml-1">›</span>
          </Link>
        </div>

        {/* Jackpot image and counter */}
        <div className="relative flex justify-center mb-8">
          <img 
            src="/placeholder.svg" 
            alt="Jackpot"
            className="h-40"
          />
          <div className="absolute bottom-4 w-64 h-16 bg-purple-800 border-4 border-yellow-400 rounded-full flex items-center justify-center">
            <div className="text-yellow-400 font-bold text-2xl">
              {jackpotAmount}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {jackpotGames.map((game) => (
            <Link 
              key={game.id}
              to={`/game/${game.id}`}
              className="block"
            >
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="text-yellow-300 font-bold">
                  {game.value}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jackpot;
