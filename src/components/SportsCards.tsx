
import { Link } from 'react-router-dom';

export const SportsCards = () => {
  const sportsCards = [
    {
      id: 'ksports',
      title: 'K-SPORTS',
      logo: 'K+',
      image: 'public/lovable-uploads/c3589fbd-851a-42a2-be73-34c251fb64c0.png',
      bgColor: 'from-red-600 to-purple-900'
    },
    {
      id: 'volta',
      title: 'VOLTA 3x3',
      logo: 'K+',
      image: 'public/lovable-uploads/9f41b834-0ec0-4919-9e9d-2aba50908378.png',
      bgColor: 'from-red-600 to-red-700'
    },
    {
      id: 'virtual',
      title: 'THỂ THAO ẢO GS',
      logo: 'K+',
      image: 'public/lovable-uploads/9f41b834-0ec0-4919-9e9d-2aba50908378.png',
      bgColor: 'from-red-600 to-orange-500'
    },
    {
      id: 'asports',
      title: 'A-SPORTS',
      logo: 'A',
      image: 'public/lovable-uploads/c3589fbd-851a-42a2-be73-34c251fb64c0.png',
      bgColor: 'from-blue-500 to-blue-700'
    },
    {
      id: 'esports',
      title: 'E-SPORTS',
      logo: 'E',
      image: 'public/lovable-uploads/09923ea0-a261-4954-a3fd-565538f3945c.png',
      bgColor: 'from-blue-600 to-blue-800'
    },
    {
      id: 'saba',
      title: 'THỂ THAO ẢO SABA',
      logo: 'S',
      image: 'public/lovable-uploads/09923ea0-a261-4954-a3fd-565538f3945c.png',
      bgColor: 'from-blue-600 to-blue-800'
    },
    {
      id: 'psports',
      title: 'P-SPORTS',
      logo: 'P',
      image: 'public/lovable-uploads/09923ea0-a261-4954-a3fd-565538f3945c.png',
      bgColor: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="bg-[#0f0f1b] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {sportsCards.map((card) => (
            <Link 
              key={card.id}
              to={`/sports/${card.id}`}
              className="block overflow-hidden rounded-lg relative"
            >
              <div className={`bg-gradient-to-b ${card.bgColor} w-full h-36 md:h-48 flex items-center justify-center relative`}>
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                  <div className="text-xl font-bold text-white">
                    {card.logo}
                  </div>
                  <div className="text-lg font-bold text-white">
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
