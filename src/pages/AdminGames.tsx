
import { useEffect } from 'react';
import GameManagement from '@/components/dashboard/GameManagement';

const AdminGames = () => {
  useEffect(() => {
    // SEO - Set document title for admin games page
    document.title = "Games Management | KBET Admin";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Manage casino games - add, edit, and remove games from the KBET platform');
    }
  }, []);

  return (
    <GameManagement />
  );
};

export default AdminGames;
