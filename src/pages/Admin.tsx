
import { useEffect } from 'react';
import DashboardHome from '@/components/dashboard/DashboardHome';

const Admin = () => {
  useEffect(() => {
    // SEO - Set document title and meta description for admin page
    document.title = "Admin Dashboard | KBET";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'KBET Admin Dashboard - Manage games, categories, and users');
    }
  }, []);

  return (
    <DashboardHome />
  );
};

export default Admin;
