
import { Link } from 'react-router-dom';

export const Promotions = () => {
  const promos = [
    {
      id: 'deposit',
      title: 'DEPOSIT BONUS',
      description: 'Make a deposit and get big rewards every day',
      icons: ['🎮', '🎁', '💰']
    },
    {
      id: 'vip',
      title: 'VIP EXPERIENCE',
      description: 'Become VIP and get exclusive rewards',
      icons: ['💎', '👑']
    },
    {
      id: 'cashback',
      title: '1.6% CASHBACK',
      description: 'Daily rewards, unlimited withdrawals',
      icons: ['🎲', '💵']
    }
  ];

  return (
    <section className="py-8 bg-[#0f0f1b]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Promotions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promos.map((promo) => (
            <Link 
              key={promo.id}
              to={`/promotion/${promo.id}`}
              className="block bg-gradient-to-r from-purple-900/70 to-purple-800/50 rounded-lg p-6 h-[150px] flex items-center"
            >
              <div className="w-3/4">
                <h3 className="text-white font-bold text-xl mb-2">{promo.title}</h3>
                <p className="text-gray-300 text-sm">{promo.description}</p>
              </div>
              <div className="w-1/4 flex flex-wrap justify-center items-center">
                {promo.icons.map((icon, i) => (
                  <span key={i} className="text-3xl mx-1">{icon}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
