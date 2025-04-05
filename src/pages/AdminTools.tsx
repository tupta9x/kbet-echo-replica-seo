
import { useEffect } from 'react';
import GameImportTools from '@/components/dashboard/GameImportTools';

const AdminTools = () => {
  useEffect(() => {
    // SEO - Set document title for admin tools page
    document.title = "Game Import Tools | KBET Admin";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Import games from external providers like GamePix, Game Distributed and Game Monetize');
    }
  }, []);

  return (
    <GameImportTools />
  );
};

export default AdminTools;
