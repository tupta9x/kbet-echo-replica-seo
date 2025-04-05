
import { Link } from 'react-router-dom';

export const SportsCards = () => {
  const sportsCards = [
    {
      id: 'ksports',
      title: 'K-SPORTS',
      logo: 'K+',
      bgColor: 'from-red-600 to-purple-900'
    },
    {
      id: 'volta',
      title: 'VOLTA 3x3',
      logo: 'V',
      bgColor: 'from-red-600 to-red-700'
    },
    {
      id: 'virtual',
      title: 'THỂ THAO ẢO GS',
      logo: 'GS',
      bgColor: 'from-red-600 to-orange-500'
    },
    {
      id: 'asports',
      title: 'A-SPORTS',
      logo: 'A',
      bgColor: 'from-blue-500 to-blue-700'
    },
    {
      id: 'esports',
      title: 'E-SPORTS',
      logo: 'E',
      bgColor: 'from-blue-600 to-blue-800'
    },
    {
      id: 'saba',
      title: 'THỂ THAO ẢO SABA',
      logo: 'S',
      bgColor: 'from-blue-600 to-blue-800'
    },
    {
      id: 'psports',
      title: 'P-SPORTS',
      logo: 'P',
      bgColor: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="bg-[#0f0f1b] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {sportsCards.map((card) => (
            <Link 
              key={card.id}
              to={`/sports/${card.id}`}
              className="block overflow-hidden rounded-lg relative group"
            >
              <div className={`bg-gradient-to-b ${card.bgColor} w-full h-28 md:h-36 flex items-center justify-center relative`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                  <div className="text-2xl font-bold text-white mb-1">
                    {card.logo}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-white">
                    {card.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsCards;
