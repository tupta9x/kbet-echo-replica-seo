
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Shield, Award, CreditCard } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kbet-darker text-white pt-12 pb-6 border-t border-kbet-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-kbet-gold mb-4">About KBET</h3>
            <p className="text-gray-300 mb-4">
              KBET offers a premium online gambling experience with a wide range of casino games,
              sports betting, live dealers, and exciting promotions. Licensed and regulated for fair play.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kbet-gold">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kbet-gold">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kbet-gold">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kbet-gold">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Casino Games Column */}
          <div>
            <h3 className="text-xl font-bold text-kbet-gold mb-4">Casino Games</h3>
            <ul className="space-y-2">
              <li><Link to="/category/slots" className="text-gray-300 hover:text-kbet-gold">Slots</Link></li>
              <li><Link to="/category/table-games" className="text-gray-300 hover:text-kbet-gold">Table Games</Link></li>
              <li><Link to="/category/live-casino" className="text-gray-300 hover:text-kbet-gold">Live Casino</Link></li>
              <li><Link to="/category/jackpot" className="text-gray-300 hover:text-kbet-gold">Jackpot Games</Link></li>
              <li><Link to="/category/new-games" className="text-gray-300 hover:text-kbet-gold">New Games</Link></li>
            </ul>
          </div>

          {/* Important Links Column */}
          <div>
            <h3 className="text-xl font-bold text-kbet-gold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-kbet-gold">About Us</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-kbet-gold">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-kbet-gold">Privacy Policy</Link></li>
              <li><Link to="/responsible-gambling" className="text-gray-300 hover:text-kbet-gold">Responsible Gambling</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-kbet-gold">FAQ</Link></li>
            </ul>
          </div>

          {/* Trust & Security Column */}
          <div>
            <h3 className="text-xl font-bold text-kbet-gold mb-4">Trust & Security</h3>
            <div className="flex items-center mb-4">
              <Shield className="h-5 w-5 mr-2 text-kbet-gold" />
              <span className="text-gray-300">Licensed & Regulated</span>
            </div>
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 mr-2 text-kbet-gold" />
              <span className="text-gray-300">Fair Gaming Certified</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-kbet-gold" />
              <span className="text-gray-300">Secure Payments</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-kbet-secondary/30 py-6">
          <h4 className="text-lg font-semibold text-kbet-gold mb-4 text-center">Payment Methods</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {['Visa', 'Mastercard', 'Skrill', 'Neteller', 'Bitcoin', 'Bank Transfer'].map((method) => (
              <div key={method} className="bg-kbet-dark py-2 px-4 rounded">
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} KBET. All Rights Reserved.</p>
          <p className="mt-2">
            Gambling can be addictive. Please play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
