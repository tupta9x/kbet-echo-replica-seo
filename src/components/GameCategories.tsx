
import { Link } from 'react-router-dom';

export const GameCategories = () => {
  const categories = [
    {
      id: 'game-bai',
      title: 'GAME BÀI',
      image: '/placeholder.svg',
      color: 'bg-emerald-500'
    },
    {
      id: 'table-games',
      title: 'TABLE GAMES',
      image: '/placeholder.svg',
      color: 'bg-red-500',
      jackpot: '14,172,347,031'
    },
    {
      id: 'quay-so',
      title: 'QUAY SỐ',
      image: '/placeholder.svg',
      color: 'bg-lime-500'
    },
    {
      id: 'ban-ca',
      title: 'BẮN CÁ',
      image: '/placeholder.svg',
      color: 'bg-purple-500',
      jackpot: '404,812,815'
    },
    {
      id: 'slots',
      title: 'SLOTS',
      image: '/placeholder.svg',
      color: 'bg-yellow-500'
    },
    {
      id: 'live-casino',
      title: 'LIVE CASINO',
      image: '/placeholder.svg',
      color: 'bg-pink-500'
    },
    {
      id: 'game-nhanh',
      title: 'GAME NHANH',
      image: '/placeholder.svg',
      color: 'bg-yellow-500',
      tags: ['X20', 'X500']
    },
    {
      id: 'no-hu',
      title: 'NỔ HŨ',
      image: '/placeholder.svg',
      color: 'bg-red-500',
      jackpot: '816,246,913,732'
    },
    {
      id: 'da-ga',
      title: 'ĐÁ GÀ',
      image: '/placeholder.svg',
      color: 'bg-emerald-600'
    },
    {
      id: 'lo-de',
      title: 'LÔ ĐỀ',
      image: '/placeholder.svg',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section className="py-8 bg-[#0f0f1b]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Danh mục trò chơi</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="block overflow-hidden rounded-lg group"
            >
              <div className={`${category.color} p-6 aspect-square relative flex flex-col items-center justify-center text-center transition-transform group-hover:scale-[1.02]`}>
                {category.tags && (
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {category.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="mb-4">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-20 h-20 mx-auto"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
                
                {category.jackpot && (
                  <div className="text-sm font-bold text-yellow-400 mt-2">
                    {category.jackpot}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
