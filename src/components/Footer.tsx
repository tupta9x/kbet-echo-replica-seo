
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f1b] text-white pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Company info */}
        <div className="mb-8 flex flex-col md:flex-row items-start gap-4">
          <div className="text-4xl font-bold">
            <span className="text-purple-500">K</span>
            <span className="text-white">BET</span>
          </div>
          <div className="text-gray-300">
            <h2 className="text-xl font-bold mb-4">KBET – Premium Online Casino & Betting Platform</h2>
            <p className="text-sm text-gray-400">
              KBET offers diverse betting options with attractive Sports sections, secure Dice games and premium Live Casino. With high odds, flexible deposit and withdrawal methods, and 24/7 customer support, KBET promises an excellent betting experience. Register now for exciting promotions!
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">SPORTS</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Match Schedule</Link></li>
              <li><Link to="/" className="hover:text-white">Sports Betting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">GAMES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Table games</Link></li>
              <li><Link to="/" className="hover:text-white">Slots</Link></li>
              <li><Link to="/" className="hover:text-white">Jackpot</Link></li>
              <li><Link to="/" className="hover:text-white">Lotto</Link></li>
              <li><Link to="/" className="hover:text-white">Card games</Link></li>
              <li><Link to="/" className="hover:text-white">Quick games</Link></li>
              <li><Link to="/" className="hover:text-white">Fishing</Link></li>
              <li><Link to="/" className="hover:text-white">Lottery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">About KBET</Link></li>
              <li><Link to="/" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white">General Rules</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">24/7 SUPPORT</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Online 24/7</Link></li>
              <li><Link to="/" className="hover:text-white">Support Telegram</Link></li>
              <li><Link to="/" className="hover:text-white">Registration Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Promotions/Events</Link></li>
              <li><Link to="/" className="hover:text-white">News</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-wrap justify-center space-x-6">
            <div className="flex items-center gap-2 text-gray-400">
              <span>💳</span> CodePay
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>👥</span> P2P
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>🪙</span> Crypto
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>📱</span> Mobile Pay
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>📱</span> Digital Wallet
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>💰</span> Card
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-xs flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <span className="mr-2">💬</span> 
            <p>Copyright © {currentYear} Powered By KBET All Rights Reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-red-500 bg-white px-1 rounded">18+</span>
            <span>🛡️</span>
            <span>MGA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
