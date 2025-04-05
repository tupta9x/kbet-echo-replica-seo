
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f1b] text-white pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Company info */}
        <div className="mb-8 flex items-start gap-4">
          <div className="text-4xl font-bold">
            <span className="text-purple-500">K</span>
            <span className="text-white">BET</span>
          </div>
          <div className="text-gray-300">
            <h2 className="text-xl font-bold mb-4">KBET – Nền Tảng Cá Cược Trực Tuyến Hàng Đầu Việt Nam</h2>
            <p className="text-sm text-gray-400">
              KBET cung cấp đa dạng lựa chọn cá cược với các sảnh Thể Thao hấp dẫn, Tài Xỉu xanh chín và Live Casino đẳng cấp. Với tỷ lệ cược cao, phương thức nạp rút tinh hoạt và dịch vụ chăm sóc khách hàng 24/7, KBET hứa hẹn mang đến trải nghiệm cá cược tuyệt vời. Đăng ký ngay để nhận ưu đãi hấp dẫn!
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">THỂ THAO</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Lịch thi đấu</Link></li>
              <li><Link to="/" className="hover:text-white">Cược thể thao</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">TRÒ CHƠI</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Table games</Link></li>
              <li><Link to="/" className="hover:text-white">Slots</Link></li>
              <li><Link to="/" className="hover:text-white">Nổ hũ</Link></li>
              <li><Link to="/" className="hover:text-white">Lô đề</Link></li>
              <li><Link to="/" className="hover:text-white">Games bài</Link></li>
              <li><Link to="/" className="hover:text-white">Game nhanh</Link></li>
              <li><Link to="/" className="hover:text-white">Bắn cá</Link></li>
              <li><Link to="/" className="hover:text-white">Quay số</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">VỀ CHÚNG TÔI</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Giới thiệu KBET</Link></li>
              <li><Link to="/" className="hover:text-white">Điều kiện - Điều khoản</Link></li>
              <li><Link to="/" className="hover:text-white">Bảo mật</Link></li>
              <li><Link to="/" className="hover:text-white">Quy định chung</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">HỖ TRỢ 24/7</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Trực tuyến 24/7</Link></li>
              <li><Link to="/" className="hover:text-white">Telegram CSKH</Link></li>
              <li><Link to="/" className="hover:text-white">Hướng dẫn đăng ký</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">THÔNG TIN</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Khuyến mãi /Sự kiện</Link></li>
              <li><Link to="/" className="hover:text-white">Tin tức</Link></li>
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
              <span>🪙</span> Tiền ảo
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>📱</span> Momo
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>📱</span> Viettel Money
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>💰</span> Thẻ cào
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
