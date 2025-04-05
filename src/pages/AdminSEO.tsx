
import { useEffect } from 'react';
import SEOManagement from '@/components/dashboard/SEOManagement';

const AdminSEO = () => {
  useEffect(() => {
    // SEO - Set document title for admin SEO page
    document.title = "SEO Management | KBET Admin";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Manage SEO settings for KBET casino platform - optimize meta tags and page descriptions');
    }
  }, []);

  return (
    <SEOManagement />
  );
};

export default AdminSEO;
