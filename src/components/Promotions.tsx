
import { Link } from 'react-router-dom';

export const Promotions = () => {
  const promos = [
    {
      id: 'deposit',
      title: 'THƯỞNG NẠP',
      description: 'Gửi tiền nhận thưởng lớn mỗi ngày',
      icons: ['🎮', '🎁', '💰']
    },
    {
      id: 'vip',
      title: 'TRẢI NGHIỆM VIP',
      description: 'Lên VIP liền, nhận tiền cực đã',
      icons: ['💎', '👑']
    },
    {
      id: 'cashback',
      title: 'HOÀN TRẢ 1,6%',
      description: 'Thưởng mỗi ngày, rút tiền không giới hạn',
      icons: ['🎲', '💵']
    }
  ];

  return (
    <section className="py-8 bg-[#0f0f1b]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Khuyến mãi hấp dẫn</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promos.map((promo) => (
            <Link 
              key={promo.id}
              to={`/promotion/${promo.id}`}
              className="block bg-purple-900/70 rounded-lg p-6 h-[150px] flex items-center"
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
