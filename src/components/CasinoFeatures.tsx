
import { Shield, Award, Zap, Gift } from 'lucide-react';

export const CasinoFeatures = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-kbet-gold" />,
      title: "Secure & Licensed",
      description: "Fully licensed casino with secure transactions and data protection"
    },
    {
      icon: <Award className="h-10 w-10 text-kbet-gold" />,
      title: "Fair Gaming",
      description: "All games are certified for fairness by independent testing labs"
    },
    {
      icon: <Zap className="h-10 w-10 text-kbet-gold" />,
      title: "Fast Payouts",
      description: "Quick and hassle-free withdrawals to your preferred payment method"
    },
    {
      icon: <Gift className="h-10 w-10 text-kbet-gold" />,
      title: "Generous Bonuses",
      description: "Regular promotions, welcome packages, and loyalty rewards"
    }
  ];

  return (
    <section className="py-12 bg-kbet-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          Why Choose <span className="text-kbet-gold">KBET</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-kbet-dark p-6 rounded-lg border border-kbet-secondary/20 text-center hover:border-kbet-gold/50 transition-all"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-kbet-dark/50 p-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoFeatures;
